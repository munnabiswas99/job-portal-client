import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { useNavigate } from "react-router";

const SocialLogin = ({ from }) => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSocialLogin = () => {
    googleSignIn()
      .then(() => {
        navigate(from || "/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <button
      onClick={handleSocialLogin}
      className="
        btn w-full flex items-center justify-center gap-3
        bg-white text-black border border-gray-300
        hover:bg-gray-100 transition-all duration-300
        rounded-full
      "
    >
      <svg width="18" height="18" viewBox="0 0 512 512">
        <g>
          <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
          <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
          <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
          <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
        </g>
      </svg>

      <span className="text-sm sm:text-base font-medium">
        Continue with Google
      </span>
    </button>
  );
};

export default SocialLogin;