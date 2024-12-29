import {
  createContext,
  useState,
  type ReactNode,
  useContext,
  useEffect,
} from "react";
import type { TutorDTO } from "@/dtos/tutorDTO";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/http/sign-in";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

interface AuthContextType {
  tutor: TutorDTO;
  handleAuthenticate: (email: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
  isLoaded: boolean;
  isSignedIn: boolean;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [tutor, setTutor] = useState<TutorDTO>({} as TutorDTO);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleAuthenticate(email: string, password: string) {
    try {
      setIsLoaded(true);

      await authenticate({ email, password }).then((response) => {
        setTutor(response.tutor);
        setIsLoaded(false);
        setIsSignedIn(true);
      });
    } catch (error) {
      console.log("err", error);
      setIsLoaded(false);
    }
  }

  async function getTutor() {
    const tutorLogger = await AsyncStorage.getItem("@tutor");

    if (tutorLogger) {
      setTutor(JSON.parse(tutorLogger));
      setIsSignedIn(true);
    }
  }

  async function handleLogout() {
    await AsyncStorage.removeItem("@tutor");
    setTutor({} as TutorDTO);
    setIsSignedIn(false);
  }

  useEffect(() => {
    getTutor();
  }, [isSignedIn]);

  return (
    <AuthContext.Provider
      value={{
        tutor,
        handleAuthenticate,
        handleLogout,
        isLoaded,
        isSignedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
