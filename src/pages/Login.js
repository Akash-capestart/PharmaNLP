import React, { useState } from "react";
import { useAppDispatch } from "../redux/Hooks";
import { doUserLogin } from "../redux/actions/UserActions";
import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";
import { BorderedInput } from "../components/loginPage/BorderedInput";
import { QuoteSection } from "../components/loginPage/QuoteSection";
import { LogoSection } from "../components/loginPage/LogoSection";
import { ImageCenteredText } from "../components/loginPage/ImageCenteredText";
import { CopyRightSection } from "../components/loginPage/CopyRightSection";

export function Login() {
  const dispatch = useAppDispatch();
  const [loginState, setloginState] = useState({
    phone_no: "",
    password: "",
  });

  const loginClickHandler = () => {
    if (loginState["phone_no"] === "" || loginState["password"] === "") {
      alert("Please Enter the Valid Credentials");
    } else {
      let userLoginPostObj = {
        endUrl: "/login",
        credential: loginState,
      };
      dispatch(doUserLogin(userLoginPostObj))        
    }
  };

  const loginInputChangeHandler = (val, key) => {
    setloginState({
      ...loginState,
      [key]: val,
    });
  };

  return (
    <div className="w-100 h-100vh d-flex align-items-center white-background position-relative">
      <>
        <div className="w-75 m-auto position-relative">
          <LogoSection />
          <div className="row no-margin align-items-center login-box white-background">
            <ImageCenteredText />
            <div className="col-md-4 login-field-box">
              <QuoteSection
                quote={"Welcome!"}
                action={"Please login to your account"}
              />
              <BorderedInput
                type={"email"}
                placeholder={"Email"}
                onChangeHandler={loginInputChangeHandler}
                onChangeFor={"phone_no"}
              />
              <BorderedInput
                type={"password"}
                placeholder={"password"}
                onChangeHandler={loginInputChangeHandler}
                onChangeFor={"password"}
              />
              <div className="mar-t-40">
                <Button
                  hasExtraPad={true}
                  text={"login"}
                  upperCaseText={true}
                  btnHasRadius={true}
                  btnHasImg={false}
                  btnClickHandler={loginClickHandler}
                  imgUrl={""}
                  loadingCase={true}
                  hasMarginLeft={false}
                  textCenter={true}
                />
              </div>
              <Link
                to={"/forgot_password"}
                state={{ enteredEmail: loginState["phone_no"] }}
                className="text-decoration-none"
              >
                <p className="text-dark-gray text-end mar-t-40 cursor-pointer">
                  Forgot password?
                </p>
              </Link>
            </div>
          </div>
        </div>
        <CopyRightSection />
      </>
    </div>
  );
}
