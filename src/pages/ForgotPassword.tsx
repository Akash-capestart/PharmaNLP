import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";
import { BorderedInput } from "../components/loginPage/BorderedInput";
import { CopyRightSection } from "../components/loginPage/CopyRightSection";
import { ImageCenteredText } from "../components/loginPage/ImageCenteredText";
import { LogoSection } from "../components/loginPage/LogoSection";
import { QuoteSection } from "../components/loginPage/QuoteSection";



export function ForgotPassword() {

  // const {state} = useLocation()  

  const forGetPassClickHandler = () => {
    alert("forget Password clicked")
  }

  const onChangeHandler = (e : string) => {
    console.log(e);
  }

  return (
    <div className="w-100 h-100vh d-flex align-items-center white-background position-relative">
      <div className="w-75 m-auto position-relative">
        <LogoSection />
        <div className="row no-margin align-items-center login-box white-background">
          <ImageCenteredText />
         
            <div className="col-md-4 login-field-box">
              <QuoteSection quote={"Forgot"} action={"Your password?"} />
              <BorderedInput                
                type={"email"}                
                placeholder={"Email"}
                // value={state ? state.enteredEmail : ""}
                // value={""}
                onChangeHandler={onChangeHandler}
                onChangeFor={"phone_no"}
              />
              <div className="mar-t-40">
                <Button
                  hasExtraPad={true}
                  text={"Send Link to Email"}
                  fontSize={16}
                  upperCaseText={true}
                  btnHasRadius={true}
                  btnHasImg={false}
                  btnClickHandler={forGetPassClickHandler}
                  imgUrl={""}
                  loadingCase={true}
                  hasMarginLeft={false}
                  textCenter={true}
                />
                <Link to={"/login"} className="text-decoration-none">
                  <p className="text-dark-gray text-end mar-t-40 cursor-pointer">
                    Back to login page!
                  </p>
                </Link>
              </div>
            </div>                               
        </div>
      </div>
      <CopyRightSection />
    </div>
  );
}
