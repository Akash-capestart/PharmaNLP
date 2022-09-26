import React, { useState, useEffect } from "react";
import { useNavigate,useParams,Link } from "react-router-dom";
import { Button } from "../components/common/Button";
import { Loader } from "../components/common/Loader";
import { BorderedInput } from "../components/loginPage/BorderedInput";
import { CopyRightSection } from "../components/loginPage/CopyRightSection";
import { ImageCenteredText } from "../components/loginPage/ImageCenteredText";
import { LogoSection } from "../components/loginPage/LogoSection";
import { QuoteSection } from "../components/loginPage/QuoteSection";
import { FetchPost } from "../dataFetchingHelpers/fetchActions";

export default function ResetPassword() {
  const [showPassword, setshowPassword] = useState(false);
  const [hasAccess, sethasAccess] = useState(false);
  const navigate = useNavigate();
  const { secret_key } = useParams();

  useEffect(() => {
    const dataFetchHandler = async () => {
      const response = await FetchPost("/login", {
        phone_no: secret_key,
        password: "Qwerty",
      });
      if (response.status === "success") {
        sethasAccess(true);
      } else {
        alert("Try to do wrong access!!!");
        navigate("/login");
      }
    };
    dataFetchHandler();
  }, [navigate, secret_key]);

  const passWordShowHandler = () => {
    setshowPassword((prevVal) => !prevVal);
  };

  return (
    <div className="w-100 h-100vh d-flex align-items-center white-background position-relative">
      {hasAccess ? (
        <>
          <div className="w-75 m-auto position-relative">
            <LogoSection />
            <div className="row no-margin align-items-center login-box white-background">
              <ImageCenteredText />
              <div className="col-md-4 login-field-box">
                <QuoteSection quote={"Change the password"} action={""} />
                <BorderedInput
                  type={showPassword ? "text" : "password"}
                  placeholder={"New Password"}
                  //   onChangeHandler={loginInputChangeHandler}
                  onChangeFor={"new_password"}
                />
                <BorderedInput
                  type={showPassword ? "text" : "password"}
                  placeholder={"Confirm Password"}
                  //   onChangeHandler={loginInputChangeHandler}
                  onChangeFor={"password_confirm"}
                />
                <div className="d-flex align-items-cener mar-t-10">
                  <input
                    type="checkbox"
                    onChange={() => passWordShowHandler()}
                  />
                  <span className="pad-l-10">Show password</span>
                </div>
                <div className="mar-t-15">
                  <Button
                    hasExtraPad={true}
                    text={"Change Password"}
                    upperCaseText={true}
                    btnHasRadius={true}
                    btnHasImg={false}
                    // btnClickHandler={loginClickHandler}
                    imgUrl={""}
                    loadingCase={true}
                    hasMarginLeft={false}
                    textCenter={true}
                  />
                  <Link to={"/login"} className="text-decoration-none">
                    <p className="text-dark-gray text-end mar-t-15 cursor-pointer">
                      Back to login page!
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <CopyRightSection />
        </>
      ) : (
        <div className="d-flex align-items-center justify-content-center w-100">
          <Loader
            size={60}
            activeColor={"#2BB24C"}
            inActiveColor={"#FFFFFF"}
            loaderBarWidth={"5px"}
          />
        </div>
      )}
    </div>
  );
}
