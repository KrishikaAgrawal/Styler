// import HomePage from "@/pages";
import HomePage from "@/pages";
import AboutUs from "@/pages/FooterLinks/AboutUs";
import PartnerWithUs from "@/pages/FooterLinks/PartnerWithUs";
import PrivacyPolicy from "@/pages/FooterLinks/PrivacyPolicy";
import TermsAndConditions from "@/pages/FooterLinks/TermsAndConditions";
import Notification from "@/pages/header/Notification";
import SpecialOffer from "@/pages/header/SpecialOffer";
import Wishlist from "@/pages/header/Wishlist";
import LandingPage from "@/pages/LandingPage/LandingPage";
import CreateNewPassword from "@/pages/login/CreateNewPassword";
import ForgotPassword from "@/pages/login/ForgotPassword";
import ForgotPwOtp from "@/pages/login/ForgotPwOtp";
import Login from "@/pages/login/Login";
import Otp from "@/pages/login/Otp";
import Profile1 from "@/pages/login/Profile1";
import Profile2 from "@/pages/login/Profile2";
import Signin from "@/pages/login/Signin";
import Signup from "@/pages/login/Signup";
import Booking from "@/pages/Services/Booking/Booking";
import DesignerDetails from "@/pages/Services/DesignerDetails";
import MostPopular from "@/pages/Services/MostPopular";

interface RoutDocument {
  href: string;
  page: React.FC;
}

const ROUTES: RoutDocument[] = [
  {
    href: "/",
    page: HomePage,
  },
  {
    href: "LandingPage",
    page: LandingPage,
  },

  {
    href: "AboutUs",
    page: AboutUs,
  },
  {
    href: "PartnerWithUs",
    page: PartnerWithUs,
  },
  {
    href: "PrivacyPolicy",
    page: PrivacyPolicy,
  },
  {
    href: "TermsAndConditions",
    page: TermsAndConditions,
  },

  {
    href: "Notification",
    page: Notification,
  },
  {
    href: "SpecialOffer",
    page: SpecialOffer,
  },
  {
    href: "Wishlist",
    page: Wishlist,
  },

  {
    href: "CreateNewPassword",
    page: CreateNewPassword,
  },
  {
    href: "ForgotPassword",
    page: ForgotPassword,
  },
  {
    href: "ForgotPwOtp",
    page: ForgotPwOtp,
  },
  {
    href: "Login",
    page: Login,
  },
  {
    href: "Otp",
    page: Otp,
  },
  {
    href: "Profile1",
    page: Profile1,
  },
  {
    href: "Profile2",
    page: Profile2,
  },
  {
    href: "Signin",
    page: Signin,
  },
  {
    href: "SignUp",
    page: Signup,
  },
  {
    href: "DesignerDetails",
    page: DesignerDetails,
  },
  {
    href: "MostPopular",
    page: MostPopular,
  },
  {
    href: "Booking",
    page: Booking,
  },
];

export { ROUTES };
