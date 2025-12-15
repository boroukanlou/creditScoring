import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/stores/authStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      login(username);
      navigate("/");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-sm shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-center">
            <img src="logo.png" alt="logo" className="w-28 h-28" />
          </div>
          <CardTitle className="text-center text-xl">Credit Scoring</CardTitle>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm">Username</label>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
