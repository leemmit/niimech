"use client";

import { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import Modal from "@/ui/Modal";
import Button from "@/ui/Button";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Login({ open, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("Login render", open);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    // TODO: авторизация
  };

  return (
    <Modal onClose={onClose}>
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-10 relative">
          {/* background glow */}
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <div className="w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full" />
          </div>

          <div
            className="
      relative mx-auto mb-5
      flex items-center justify-center
      w-18 h-18 rounded-3xl

      bg-gradient-to-br
      from-cyan-400/15
      to-blue-500/15

      border border-cyan-400/20

      shadow-[0_0_40px_rgba(34,211,238,0.2)]
    "
          >
            <LogIn size={34} className="text-cyan-300" />
          </div>

          {/* <span
            className="
      inline-flex items-center gap-2
      px-3 py-1 rounded-full
      text-xs font-medium

      border border-cyan-400/20
      bg-cyan-400/5
      text-cyan-300
      mb-4
    "
          >
            Защищённый доступ
          </span> */}

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Личный кабинет
          </h2>

          <p className="text-gray-400 mt-3">
            Доступ к заявкам, отчётам и инженерной документации
          </p>
        </div>

        {/* Form */}
        <div
          className="
                    relative

                    rounded-3xl
                    border border-white/10

                    bg-gradient-to-b
                    from-white/[0.04]
                    to-white/[0.02]

                    backdrop-blur-xl

                    p-6
                "
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2 text-white/90">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="
                  absolute left-4 top-1/2 -translate-y-1/2
                  text-gray-400
                "
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@mail.ru"
                  className="
                            w-full
                            h-14

                            rounded-2xl

                            bg-white/[0.04]
                            border border-white/10

                            pl-12 pr-4

                            text-white
                            placeholder:text-gray-500

                            transition-all duration-300

                            focus:outline-none
                            focus:border-cyan-400/50

                            focus:bg-white/[0.06]

                            focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]
                            "
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white/90">
                Пароль
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400/70"
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введите пароль"
                  className="
  w-full
  h-14

  rounded-2xl

  bg-white/[0.04]
  border border-white/10

  pl-12 pr-4

  text-white
  placeholder:text-gray-500

  transition-all duration-300

  focus:outline-none
  focus:border-cyan-400/50

  focus:bg-white/[0.06]

  focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]
"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="
                text-sm text-cyan-600
                hover:text-cyan-700
                hover:underline
              "
              >
                Забыли пароль?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full justify-center !h-14 shadow-[0_0_35px_rgba(34,211,238,0.3)]"
            >
              Войти в систему
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Нет аккаунта?{" "}
            <button
              type="button"
              className="
                text-cyan-600
                hover:text-cyan-700
                font-medium
              "
            >
              Зарегистрироваться
            </button>
          </p>
        </div>
      </div>
    </Modal>
  );
}
