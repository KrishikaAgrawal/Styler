// import HomePage from "@/pages";
// import HomePage from "@/pages";
import Sidebar from "@/components/common/Sidebar";
import AppointmentCancellation from "@/pages/Appointment/AppointmentCancellation";
import Appointments from "@/pages/Appointment/Appointments";
import AboutUs from "@/pages/Onboarding/FooterLinks/AboutUs";
import PartnerWithUs from "@/pages/Onboarding/FooterLinks/PartnerWithUs";
import PrivacyPolicy from "@/pages/Onboarding/FooterLinks/PrivacyPolicy";
import TermsAndConditions from "@/pages/Onboarding/FooterLinks/TermsAndConditions";
import Notification from "@/pages/Dashboard/header/Notification";
import SpecialOffer from "@/pages/Dashboard/header/SpecialOffer";
import UserProfile from "@/pages/Dashboard/header/UserProfile";
import Wishlist from "@/pages/Dashboard/header/Wishlist";
// import SetLoading from "@/pages/HomePage";
import HomePage from "@/pages/Onboarding/HomePage";
import Dashboard from "@/pages/Dashboard/Dashboard";
import CreateNewPassword from "@/pages/login/CreateNewPassword";
import ForgotPassword from "@/pages/login/ForgotPassword";
import ForgotPwOtp from "@/pages/login/ForgotPwOtp";
import Login from "@/pages/login/Login";
import Otp from "@/pages/login/Otp";
// import Profile1 from "@/pages/login/Profile1";
// import Profile2 from "@/pages/login/Profile2";
import Signin from "@/pages/login/Signin";
import Signup from "@/pages/login/Signup";
import AddMeasurements from "@/pages/Booking/AddMeasurements";
import Booking from "@/pages/Booking/Booking";
import Checkout from "@/pages/Booking/Checkout";
import InPersonConsultation from "@/pages/Booking/Consultation/InPersonConsultation";
import VirtualConsultation from "@/pages/Booking/Consultation/VirtualConsultation";
import DesignerDetails from "@/pages/Consultation/DesignerDetails";
import MostPopular from "@/pages/Consultation/MostPopular";
import Address from "@/pages/Booking/Address/Address";
import Order from "@/pages/Services/Order/Order";
import MaterialCheckout from "@/pages/Shop/MaterialCheckout";
import MaterialDetails from "@/pages/Shop/MaterialDetails";
import Shop from "@/pages/Shop/Shop";
import SetNewAddress from "@/pages/Booking/Address/SetNewAddress";
import InPersonConsultationConfirm from "@/pages/Booking/Consultation/InPersonConsultationConfirm";
import GiveFeedback from "@/pages/Appointment/GiveFeedback";
import Blog from "@/pages/Onboarding/Blog/Blog";
import BlogDetail from "@/pages/Onboarding/Blog/BlogDetail";
import ContactUs from "@/pages/Onboarding/Contact/ContactUs";
import AddCoupon from "@/pages/Booking/AddCoupon";
import MyOrders from "@/pages/Orders/MyOrders";
import OrderViewDetails from "@/pages/Orders/OrderViewDetails";
import DuePaymentOrderViewDetails from "@/pages/Orders/DuePaymentOrderViewDetails";
import CancelledOrderPage from "@/pages/Orders/CancelledOrderPage";
import CancelledOrderViewPage from "@/pages/Orders/CancelledOrderViewPage";
import PaymentOverview from "@/pages/Payment/PaymentOverview";
import TransactionHistory from "@/pages/Payment/TransactionHistory";
import Quotation from "@/pages/Quotation/Quotation";
import QuotationPayment from "@/pages/Quotation/QuotationPayment";

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
    href: "Dashboard",
    page: Dashboard,
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
  // {
  //   href: "Profile1",
  //   page: Profile1,
  // },
  // {
  //   href: "Profile2",
  //   page: Profile2,
  // },
  {
    href: "Signin",
    page: Signin,
  },
  {
    href: "SignUp",
    page: Signup,
  },
  {
    href: "DesignerDetails/:id",
    page: DesignerDetails,
  },
  {
    href: "Consultation",
    page: MostPopular,
  },
  {
    href: "Booking",
    page: Booking,
  },
  {
    href: "AddMeasurements",
    page: AddMeasurements,
  },
  {
    href: "InPerson",
    page: InPersonConsultation,
  },
  {
    href: "Virtual",
    page: VirtualConsultation,
  },
  {
    href: "OrderDetails",
    page: Order,
  },
  {
    href: "Address",
    page: Address,
  },
  {
    href: "Profile",
    page: UserProfile,
  },
  {
    href: "Shop",
    page: Shop,
  },
  {
    href: "MaterialDetails",
    page: MaterialDetails,
  },
  {
    href: "MaterialCheckout",
    page: MaterialCheckout,
  },
  {
    href: "Appointments",
    page: Appointments,
  },
  {
    href: "AppointmentCancellation",
    page: AppointmentCancellation,
  },
  {
    href: "Sidebar",
    page: Sidebar,
  },

  {
    href: "Checkout",
    page: Checkout,
  },
  {
    href: "SetNewAddress",
    page: SetNewAddress,
  },
  {
    href: "InPersonConsultationConfirm",
    page: InPersonConsultationConfirm,
  },
  {
    href: "GiveFeedback",
    page: GiveFeedback,
  },
  {
    href: "Blog",
    page: Blog,
  },
  {
    href: "BlogDetail",
    page: BlogDetail,
  },
  {
    href: "ContactUs",
    page: ContactUs,
  },
  {
    href: "AddCoupon",
    page: AddCoupon,
  },
  {
    href: "MyOrders",
    page: MyOrders,
  },
  {
    href: "OrderViewDetails",
    page: OrderViewDetails,
  },
  {
    href: "DuePaymentOrderViewDetails",
    page: DuePaymentOrderViewDetails,
  },
  {
    href: "CancelledOrderPage",
    page: CancelledOrderPage,
  },
  {
    href: "CancelledOrderViewPage",
    page: CancelledOrderViewPage,
  },
  {
    href: "PaymentOverview",
    page: PaymentOverview,
  },
  {
    href: "TransactionHistory",
    page: TransactionHistory,
  },
  {
    href: "Quotation",
    page: Quotation,
  },
  {
    href: "QuotationPayment",
    page: QuotationPayment,
  },
];

export { ROUTES };
