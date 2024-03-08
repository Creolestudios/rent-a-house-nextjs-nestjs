import React, { useState, useEffect, ReactNode } from "react";
import dynamic from "next/dynamic";
import { AddPagesWrapper } from "./StaticPageManagement.styles";
import { Form, Input, Radio, Tabs } from "antd";
import { CustomButton } from "@/globalStyles";
import type { RadioChangeEvent, TabsProps } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import appActions from "@/redux/app/app.action";
import actions from "@/redux/admin/languages/languages.action";
import cmsActions from "@/redux/admin/cms/cms.action";
import { RootState } from "@/redux/store/rootReducer";
import { setOptions } from "react-chartjs-2/dist/utils";
import AboutUs from "@/components/AboutUs/AboutUs";
import ContactUs from "@/components/ContactUs/ContactUs";
import Faq from "@/components/Faq/Faq";
import Pricing from "@/components/Pricing/Pricing";
import LendingPage from "@/components/LendingPage/LendingPage";
import TermsConditions from "@/components/TermsConditions/TermsConditions";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "@/components/CookiePolicy/CookiePolicy";

export interface HeaderProp {
  header?: ReactNode;
}

const AddPages = ({ header }: HeaderProp) => {
  // const Editor = dynamic(() => import('./Editor'), { ssr: false });
  const [radioValue, setRadioValue] = useState();
  const [form] = Form.useForm();
  const plainOptions = ["english", "chinese", "french"];
  const [contentData, setContentData] = useState("");

  const onRadioChange = ({ target: { value } }: RadioChangeEvent) => {
    setRadioValue(value);
  };

  const { disableInput } = useSelector((state: any) => state.appReducer);
  const languages = useSelector(
    (state: RootState) => state.languageReducer.allLanguages
  );
  const payload: any = useSelector(
    (state: RootState) => state.cmsReducer.content
  );
  let testpayload = useSelector(
    (state: RootState) => state.cmsReducer.pageContent
  );
  let testdata = testpayload && JSON.parse(testpayload);
  const cmsData = useSelector(
    (state: RootState) => state.cmsReducer.cmsDetails
  );
  const { activeTab } = useSelector((state: any) => state.appReducer);
  // const pageContent = useSelector(
  //   (state: RootState) => state.staticPageReducer.pageContent
  // );
  const pageContent = useSelector(
    (state: RootState) => state.cmsReducer?.cmsDetails[0]?.content
  );

  const newly = useSelector(
    (state: RootState) => state.cmsReducer?.cmsDetails[0]?.content
  );

  const [langOptions, setLangOptions] = useState([]);
  const [editData, setEditData] = useState([]);

  const dispatch = useDispatch();

  const router = useRouter();

  const pageName = router.query.id;

  let data = newly && JSON.parse(newly);
  useEffect(() => {
    dispatch(actions.getAllLanguage());
  }, []);
  useEffect(() => {
    pageName && dispatch(cmsActions.getOneCMSPage({ identifier: pageName }));
  }, [pageName]);

  useEffect(() => {
    let array = [];
    if (cmsData[0]?.id) {
      cmsData.length > 0 &&
        cmsData.map((item, index) => {
          let input = {
            content: item.content,
            id: item.id,
            language_id: item.language_id,
            meta_description: item.meta_description,
            meta_title: item.meta_title,
            page_name: item.page_name,
          };
          array.push(input);
        });
      setEditData(array);
      dispatch(cmsActions.addContent(array));
    } else {
      cmsData.length > 0 &&
        cmsData.map((item, index) => {
          let input = {
            content: item.content,
            language_id: item.language_id,
            meta_description: item.meta_description,
            meta_title: item.meta_title,
            page_name: item.page_name,
          };
          array.push(input);
        });
      setEditData(array);
      dispatch(cmsActions.addContent(array));
    }
  }, [cmsData]);

  useEffect(() => {
    let array = [];
    languages.map((item, index) => {
      let input = {
        content: "",
        language_id: item.id,
        meta_description: "",
        meta_title: "",
        page_name: "",
      };
      array.push(input);
    });
    setInput(array);
    dispatch(cmsActions.addContent(array));
  }, [languages]);

  useEffect(() => {
    let list = [];
    languages.map((item: any) => {
      let option = {
        value: item.id,
        label: item.name,
      };
      list.push(option);
    });
    setLangOptions(list);
  }, [languages]);

  // useEffect(() => {
  //   const slider: any = document.querySelector('.ant-radio-group');
  //   let isDown = false;
  //   let startX: any;
  //   let scrollLeft: any;

  //   slider.addEventListener('mousedown', (e: any) => {
  //     isDown = true;
  //     slider.classList.add('active');
  //     startX = e.pageX - slider.offsetLeft;
  //     scrollLeft = slider.scrollLeft;
  //   });

  //   slider.addEventListener('mouseleave', () => {
  //     isDown = false;
  //     slider.classList.remove('active');
  //   });
  //   slider.addEventListener('wheel', (e: any) => {
  //     scrollY -= e.deltaY * 0.9;
  //   });
  //   slider.addEventListener('mouseup', () => {
  //     isDown = false;
  //     slider.classList.remove('active');
  //   });
  //   slider.addEventListener('mousemove', (e: any) => {
  //     if (!isDown) return;
  //     e.preventDefault();
  //     const x = e.pageX - slider.offsetLeft;
  //     const walk = (x - startX) * 1; //scroll-fast
  //     slider.scrollLeft = scrollLeft - walk;
  //   });
  // }, []);
  const handleSave = () => {
    // console.log("saving...")
    // dispatch(
    // cmsActions.createCMSPage({ CreateCmsPageInput: { data: payload } })
    // );
    // router.push('/admin/static-page-management');
  };
  const [toggle, setToggle] = useState<any>("");
  // for contact

  const handleSavePage = () => {
    switch (pageName) {
      case "about-us":
        let aboutUs1 = document.getElementById("about_us_1").innerText;
        let aboutUs2 = document.getElementById("about_us_2").innerText;
        let aboutUs3 = document.getElementById("about_us_3").innerText;
        let aboutUs4 = document.getElementById("about_us_4").innerText;
        let aboutUs5 = document.getElementById("about_us_5").innerText;
        let aboutUs6 = document.getElementById("about_us_6").innerText;
        let aboutUs7 = document.getElementById("about_us_7").innerText;

        let aboutUsI1 = document.getElementById("img00").getAttribute("src");
        let aboutUsI2 = document.getElementById("img10").getAttribute("src");
        let aboutUsI3 = document.getElementById("img11").getAttribute("src");
        let aboutUsI4 = document.getElementById("img20").getAttribute("src");
        let aboutUsI5 = document.getElementById("img21").getAttribute("src");
        let aboutUsI6 = document.getElementById("img30").getAttribute("src");
        let aboutUsI7 = document.getElementById("img40").getAttribute("src");
        let aboutUsI8 = document.getElementById("img8").getAttribute("src");
        let aboutUsI9 = document.getElementById("img9").getAttribute("src");

        let aboutobj: any = {};
        (aboutobj.aboutUs1 = aboutUs1),
          (aboutobj.aboutUs2 = aboutUs2),
          (aboutobj.aboutUs3 = aboutUs3),
          (aboutobj.aboutUs4 = aboutUs4),
          (aboutobj.aboutUs5 = aboutUs5),
          (aboutobj.aboutUs6 = aboutUs6),
          (aboutobj.aboutUs7 = aboutUs7),
          (aboutobj.img00 = aboutUsI1),
          (aboutobj.img10 = aboutUsI2),
          (aboutobj.img11 = aboutUsI3),
          (aboutobj.img20 = aboutUsI4),
          (aboutobj.img21 = aboutUsI5),
          (aboutobj.img30 = aboutUsI6),
          (aboutobj.img40 = aboutUsI7),
          (aboutobj.img8 = aboutUsI8),
          (aboutobj.img9 = aboutUsI9);

        let aboutdata = JSON.stringify(aboutobj);

        let newPayloadAbout = [
          {
            content: aboutdata,
            meta_description: cmsData[0]?.meta_description,
            meta_title: cmsData[0]?.meta_title,
            page_name: cmsData[0]?.page_name,
            id: cmsData[0]?.id,
            language_id: cmsData[0]?.language_id,
          },
        ];

        dispatch(appActions.disableInput(false));
        dispatch(
          cmsActions.updateCMSPage({
            updateCms: { data: newPayloadAbout },
          })
        );
        break;

      case "contact-us":
        let contactUs1 = document.getElementById("contact_1").innerText;
        let contactUs2 = document.getElementById("contact_2").innerText;
        let contactUs3 = document.getElementById("contactPhoneNo").innerText;
        let contactUs4 = document.getElementById("contactEmail").innerText;
        let contactUs5 = document.getElementById("contactAddress").innerText;
        let contactUs6 = document.getElementById("contactDayLabel1").innerText;
        let contactUs7 = document.getElementById("contactDayLabel2").innerText;
        let contactUs8 = document.getElementById("contactTimeLabel1").innerText;
        let contactUs9 = document.getElementById("contactTimeLabel2").innerText;

        let contactobj: any = {};
        (contactobj.contact1 = contactUs1),
          (contactobj.contact2 = contactUs2),
          (contactobj.contact3 = contactUs3),
          (contactobj.contact4 = contactUs4),
          (contactobj.contact5 = contactUs5),
          (contactobj.contact6 = contactUs6),
          (contactobj.contact7 = contactUs7),
          (contactobj.contact8 = contactUs8),
          (contactobj.contact9 = contactUs9);

        let contactdata = JSON.stringify(contactobj);

        let newlytest = [
          {
            content: contactdata,
            meta_description: cmsData[0]?.meta_description,
            meta_title: cmsData[0]?.meta_title,
            page_name: cmsData[0]?.page_name,
            id: cmsData[0]?.id,
            language_id: cmsData[0]?.language_id,
          },
        ];

        dispatch(appActions.disableInput(false));
        dispatch(
          cmsActions.updateCMSPage({
            updateCms: { data: newlytest },
          })
        );
        break;

      case "pricing":
        if (activeTab === 1) {
          let pricing1 = document.getElementById("pricing1").innerText;
          let pricing2 = document.getElementById("pricing2").innerText;

          let pricing3 = document.getElementById("priceRender1").innerText;
          let pricing4 = document.getElementById("priceRender2").innerText;
          let pricing5 = document.getElementById("priceRender3").innerText;
          let pricing6 = document.getElementById("priceRender4").innerText;

          let pricing7 = document.getElementById("priceRenderdesc1").innerText;
          let pricing8 = document.getElementById("priceRenderdesc2").innerText;
          let pricing9 = document.getElementById("priceRenderdesc3").innerText;
          let pricing10 = document.getElementById("priceRenderdesc4").innerText;

          let pricing11 = document.getElementById("priceRenderlink1").innerText;
          let pricing12 = document.getElementById("priceRenderlink2").innerText;
          let pricing13 = document.getElementById("priceRenderlink3").innerText;
          let pricing14 = document.getElementById("priceRenderlink4").innerText;

          let pricing15 = document.getElementById(
            "pricingRenderHighlight1"
          ).innerText;
          let pricing16 = document.getElementById(
            "pricingRenderHighlight2"
          ).innerText;
          let pricing17 = document.getElementById(
            "pricingRenderHighlight3"
          ).innerText;
          let pricing18 = document.getElementById(
            "pricingRenderHighlight4"
          ).innerText;
          // let pricing19=document.getElementById('pricingRenderHighlight5').innerText;
          // let pricing20=document.getElementById('pricingRenderHighlight6').innerText;

          let pricing21 = document.getElementById(
            "pricingRenderHighlightDescription1"
          ).innerText;
          let pricing22 = document.getElementById(
            "pricingRenderHighlightDescription2"
          ).innerText;
          let pricing23 = document.getElementById(
            "pricingRenderHighlightDescription3"
          ).innerText;
          let pricing24 = document.getElementById(
            "pricingRenderHighlightDescription4"
          ).innerText;

          let pricing25 = document.getElementById(
            "pricingRenderButton1"
          ).innerText;
          let pricing26 = document.getElementById(
            "pricingRenderButton2"
          ).innerText;
          let pricing27 = document.getElementById(
            "pricingRenderButton3"
          ).innerText;
          let pricing28 = document.getElementById(
            "pricingRenderButton4"
          ).innerText;

          let pricing29 = document.getElementById(
            "priceFaqTenantTitle"
          ).innerText;
          let pricing30 = document.getElementById(
            "priceFaqTenantSubTitle"
          ).innerText;

          let pricing31 = document.getElementById(
            "faqHeading1PriceTenant"
          ).innerText;
          let pricing32 = document.getElementById(
            "faqHeading2PriceTenant"
          ).innerText;
          let pricing33 = document.getElementById(
            "faqHeading3PriceTenant"
          ).innerText;
          let pricing34 = document.getElementById(
            "faqHeading4PriceTenant"
          ).innerText;

          let pricing35 = document.getElementById(
            "faqdesc1PriceTenant"
          ).innerText;
          let pricing36 =
            document.getElementById("faqdesc2PriceTenant")?.innerText ||
            datas.pricing36;
          let pricing37 =
            document.getElementById("faqdesc3PriceTenant")?.innerText ||
            datas.pricing37;
          let pricing38 =
            document.getElementById("faqdesc4PriceTenant")?.innerText ||
            datas.pricing38;

          let pricingobj: any = {};
          pricingobj.pricing1 = pricing1;
          pricingobj.pricing2 = pricing2;
          pricingobj.pricing3 = pricing3;
          pricingobj.pricing4 = pricing4;
          pricingobj.pricing5 = pricing5;
          pricingobj.pricing6 = pricing6;
          pricingobj.pricing7 = pricing7;
          pricingobj.pricing8 = pricing8;
          pricingobj.pricing9 = pricing9;
          pricingobj.pricing10 = pricing10;

          pricingobj.pricing11 = pricing11;
          pricingobj.pricing12 = pricing12;
          pricingobj.pricing13 = pricing13;
          pricingobj.pricing14 = pricing14;

          pricingobj.pricing15 = pricing15;
          pricingobj.pricing16 = pricing16;
          pricingobj.pricing17 = pricing17;
          pricingobj.pricing18 = pricing18;

          pricingobj.pricing21 = pricing21;
          pricingobj.pricing22 = pricing22;
          pricingobj.pricing23 = pricing23;
          pricingobj.pricing24 = pricing24;

          pricingobj.pricing25 = pricing25;
          pricingobj.pricing26 = pricing26;
          pricingobj.pricing27 = pricing27;
          pricingobj.pricing28 = pricing28;

          pricingobj.pricing29 = pricing29;
          pricingobj.pricing30 = pricing30;

          pricingobj.pricing31 = pricing31;
          pricingobj.pricing32 = pricing32;
          pricingobj.pricing33 = pricing33;
          pricingobj.pricing34 = pricing34;

          pricingobj.pricing35 = pricing35;
          pricingobj.pricing36 = pricing36;
          pricingobj.pricing37 = pricing37;
          pricingobj.pricing38 = pricing38;

          // for landlord

          pricingobj.pricinglandlord1 = data.pricinglandlord1;
          pricingobj.pricinglandlord2 = data.pricinglandlord2;
          pricingobj.pricinglandlord3 = data.pricinglandlord3;
          pricingobj.pricinglandlord4 = data.pricinglandlord4;
          pricingobj.pricinglandlord5 = data.pricinglandlord5;
          pricingobj.pricinglandlord6 = data.pricinglandlord6;

          pricingobj.pricingId1 = data.pricingId1;
          pricingobj.pricingId2 = data.pricingId2;
          pricingobj.pricingId3 = data.pricingId3;
          pricingobj.pricingId4 = data.pricingId4;

          pricingobj.priceFaqlandlordTitle = data.priceFaqlandlordTitle;
          pricingobj.priceFaqlandlordSubTitle = data.priceFaqlandlordSubTitle;

          pricingobj.faqHeading1PriceLandlord = data.faqHeading1PriceLandlord;
          pricingobj.faqHeading2PriceLandlord = data.faqHeading2PriceLandlord;
          pricingobj.faqHeading3PriceLandlord = data.faqHeading3PriceLandlord;
          pricingobj.faqHeading4PriceLandlord = data.faqHeading4PriceLandlord;

          pricingobj.faqdesc1PriceLandlord = data.faqdesc1PriceLandlord;
          pricingobj.faqdesc2PriceLandlord = data.faqdesc2PriceLandlord;
          pricingobj.faqdesc3PriceLandlord = data.faqdesc3PriceLandlord;
          pricingobj.faqdesc4PriceLandlord = data.faqdesc4PriceLandlord;

          pricingobj.benifitBlockImage = data.benifitBlockImage;

          let pricingdata = JSON.stringify(pricingobj);

          let newPayloadPricing = [
            {
              content: pricingdata,
              meta_description: cmsData[0]?.meta_description,
              meta_title: cmsData[0]?.meta_title,
              page_name: cmsData[0]?.page_name,
              id: cmsData[0]?.id,
              language_id: cmsData[0]?.language_id,
            },
          ];

          dispatch(appActions.disableInput(false));
          dispatch(
            cmsActions.updateCMSPage({
              updateCms: { data: newPayloadPricing },
            })
          );
        } else {
          let pricing1 = document.getElementById("pricing1").innerText;
          let pricing2 = document.getElementById("pricing2").innerText;
          let pricinglandlord1 =
            document.getElementById("pricinglandlord1").innerText;
          let pricinglandlord2 =
            document.getElementById("pricinglandlord2").innerText;
          let pricinglandlord3 =
            document.getElementById("pricinglandlord3").innerText;

          let pricinglandlord4 = document.getElementById(
            "pricinglandlorddesc1"
          ).innerText;
          let pricinglandlord5 = document.getElementById(
            "pricinglandlorddesc2"
          ).innerText;
          let pricinglandlord6 = document.getElementById(
            "pricinglandlorddesc3"
          ).innerText;

          let pricingId1 =
            document.getElementById("pricingHeadingId1").innerText;
          let pricingId2 =
            document.getElementById("pricingHeadingId2").innerText;

          let pricingId3 =
            document.getElementById("pricingSubtitleId1").innerText;
          let pricingId4 =
            document.getElementById("pricingSubtitleId2").innerText;

          let priceFaqlandlordTitle = document.getElementById(
            "priceFaqlandlordTitle"
          ).innerText;
          let priceFaqlandlordSubTitle = document.getElementById(
            "priceFaqlandlordSubTitle"
          ).innerText;

          let faqHeading1PriceLandlord = document.getElementById(
            "faqHeading1PriceLandlord"
          ).innerText;
          let faqHeading2PriceLandlord = document.getElementById(
            "faqHeading2PriceLandlord"
          ).innerText;
          let faqHeading3PriceLandlord = document.getElementById(
            "faqHeading3PriceLandlord"
          ).innerText;
          let faqHeading4PriceLandlord = document.getElementById(
            "faqHeading4PriceLandlord"
          ).innerText;

          let faqdesc1PriceLandlord = document.getElementById(
            "faqdesc1PriceLandlord"
          ).innerText;
          let faqdesc2PriceLandlord =
            document.getElementById("faqdesc2PriceLandlord")?.innerText ||
            datas.faqdesc2PriceLandlord;
          let faqdesc3PriceLandlord =
            document.getElementById("faqdesc3PriceLandlord")?.innerText ||
            datas.faqdesc3PriceLandlord;
          let faqdesc4PriceLandlord =
            document.getElementById("faqdesc4PriceLandlord")?.innerText ||
            datas.faqdesc4PriceLandlord;

          let benifitBlockImage = document
            .getElementById("benifitBlockImage")
            .getAttribute("src");

          let priceobj: any = {};
          priceobj.pricing1 = pricing1;
          priceobj.pricing2 = pricing2;

          priceobj.pricinglandlord1 = pricinglandlord1;
          priceobj.pricinglandlord2 = pricinglandlord2;
          priceobj.pricinglandlord3 = pricinglandlord3;
          priceobj.pricinglandlord4 = pricinglandlord4;
          priceobj.pricinglandlord5 = pricinglandlord5;
          priceobj.pricinglandlord6 = pricinglandlord6;
          priceobj.pricingId1 = pricingId1;
          priceobj.pricingId2 = pricingId2;
          priceobj.pricingId3 = pricingId3;
          priceobj.pricingId4 = pricingId4;

          priceobj.priceFaqlandlordTitle = priceFaqlandlordTitle;
          priceobj.priceFaqlandlordSubTitle = priceFaqlandlordSubTitle;

          priceobj.faqHeading1PriceLandlord = faqHeading1PriceLandlord;
          priceobj.faqHeading2PriceLandlord = faqHeading2PriceLandlord;
          priceobj.faqHeading3PriceLandlord = faqHeading3PriceLandlord;
          priceobj.faqHeading4PriceLandlord = faqHeading4PriceLandlord;

          priceobj.faqdesc1PriceLandlord = faqdesc1PriceLandlord;
          priceobj.faqdesc2PriceLandlord = faqdesc2PriceLandlord;
          priceobj.faqdesc3PriceLandlord = faqdesc3PriceLandlord;
          priceobj.faqdesc4PriceLandlord = faqdesc4PriceLandlord;

          priceobj.benifitBlockImage = benifitBlockImage;

          //for tennant side
          // priceobj.pricing1=data.pricing1;
          // priceobj.pricing2=data.pricing2;
          priceobj.pricing3 = data.pricing3;
          priceobj.pricing4 = data.pricing4;
          priceobj.pricing5 = data.pricing5;
          priceobj.pricing6 = data.pricing6;
          priceobj.pricing7 = data.pricing7;
          priceobj.pricing8 = data.pricing8;
          priceobj.pricing9 = data.pricing9;
          priceobj.pricing10 = data.pricing10;

          priceobj.pricing11 = data.pricing11;
          priceobj.pricing12 = data.pricing12;
          priceobj.pricing13 = data.pricing13;
          priceobj.pricing14 = data.pricing14;

          priceobj.pricing15 = data.pricing15;
          priceobj.pricing16 = data.pricing16;
          priceobj.pricing17 = data.pricing17;
          priceobj.pricing18 = data.pricing18;

          priceobj.pricing21 = data.pricing21;
          priceobj.pricing22 = data.pricing22;
          priceobj.pricing23 = data.pricing23;
          priceobj.pricing24 = data.pricing24;

          priceobj.pricing25 = data.pricing25;
          priceobj.pricing26 = data.pricing26;
          priceobj.pricing27 = data.pricing27;
          priceobj.pricing28 = data.pricing28;

          priceobj.pricing29 = data.pricing29;
          priceobj.pricing30 = data.pricing30;

          priceobj.pricing31 = data.pricing31;
          priceobj.pricing32 = data.pricing32;
          priceobj.pricing33 = data.pricing33;
          priceobj.pricing34 = data.pricing34;

          priceobj.pricing35 = data.pricing35;
          priceobj.pricing36 = data.pricing36;
          priceobj.pricing37 = data.pricing37;
          priceobj.pricing38 = data.pricing38;

          let pricedata = JSON.stringify(priceobj);

          let newPayloadPrice = [
            {
              content: pricedata,
              meta_description: cmsData[0]?.meta_description,
              meta_title: cmsData[0]?.meta_title,
              page_name: cmsData[0]?.page_name,
              id: cmsData[0]?.id,
              language_id: cmsData[0]?.language_id,
            },
          ];

          dispatch(appActions.disableInput(false));
          dispatch(
            cmsActions.updateCMSPage({
              updateCms: { data: newPayloadPrice },
            })
          );
        }

        break;

      case "faq":
        let faq1 = document.getElementById("faq1").innerText;
        let faq2 = document.getElementById("faq2").innerText;

        let faq3 =
          document.getElementById("faqdesc1tenant")?.innerText || datas.faq3;
        let faq4 =
          document.getElementById("faqdesc2tenant")?.innerText || datas.faq4;
        let faq5 =
          document.getElementById("faqdesc3tenant")?.innerText || datas.faq5;
        let faq6 =
          document.getElementById("faqdesc4tenant")?.innerText || datas.faq6;

        let faq7 =
          document.getElementById("faqTitleId")?.innerText || datas.faq7;
        let faq8 =
          document.getElementById("faqSubTitleId")?.innerText || datas.faq8;

        let faq9 =
          document.getElementById("faqHeading1tenant")?.innerText || datas.faq9;
        let faq10 =
          document.getElementById("faqHeading2tenant")?.innerText ||
          datas.faq10;
        let faq11 =
          document.getElementById("faqHeading3tenant")?.innerText ||
          datas.faq11;
        let faq12 =
          document.getElementById("faqHeading4tenant")?.innerText ||
          datas.faq12;

        let faq13 =
          document.getElementById("faqStrip")?.innerText || datas.faq13;

        let faq14 =
          document.getElementById("faqHeading1landlord")?.innerText ||
          datas.faq14;
        let faq15 =
          document.getElementById("faqHeading2landlord")?.innerText ||
          datas.faq15;
        let faq16 =
          document.getElementById("faqHeading3landlord")?.innerText ||
          datas.faq16;
        let faq17 =
          document.getElementById("faqHeading4landlord")?.innerText ||
          datas.faq17;

        let faq18 =
          document.getElementById("faqdesc1landlord")?.innerText || datas.faq18;
        let faq19 =
          document.getElementById("faqdesc2landlord")?.innerText || datas.faq19;
        let faq20 =
          document.getElementById("faqdesc3landlord")?.innerText || datas.faq20;
        let faq21 =
          document.getElementById("faqdesc4landlord")?.innerText || datas.faq21;

        let faqobj: any = {};
        faqobj.faq1 = faq1;
        faqobj.faq2 = faq2;
        faqobj.faq3 = faq3;
        faqobj.faq4 = faq4;
        faqobj.faq5 = faq5;
        faqobj.faq6 = faq6;
        faqobj.faq7 = faq7;
        faqobj.faq8 = faq8;
        faqobj.faq9 = faq9;
        faqobj.faq10 = faq10;
        faqobj.faq11 = faq11;
        faqobj.faq12 = faq12;
        faqobj.faq13 = faq13;
        faqobj.faq14 = faq14;
        faqobj.faq15 = faq15;
        faqobj.faq16 = faq16;
        faqobj.faq17 = faq17;
        faqobj.faq18 = faq18;
        faqobj.faq19 = faq19;
        faqobj.faq20 = faq20;
        faqobj.faq21 = faq21;

        let faqdata = JSON.stringify(faqobj);

        let newPayloadFaq = [
          {
            content: faqdata,
            meta_description: cmsData[0]?.meta_description,
            meta_title: cmsData[0]?.meta_title,
            page_name: cmsData[0]?.page_name,
            id: cmsData[0]?.id,
            language_id: cmsData[0]?.language_id,
          },
        ];

        dispatch(appActions.disableInput(false));
        dispatch(
          cmsActions.updateCMSPage({
            updateCms: { data: newPayloadFaq },
          })
        );

        break;

      case "home":
        let workListTenant1Title =
          document.getElementById("workListTenant1Title")?.innerText ||
          datas.workListTenant1Title;
        let workListTenant2Title =
          document.getElementById("workListTenant2Title")?.innerText ||
          datas.workListTenant2Title;
        let workListTenant3Title =
          document.getElementById("workListTenant3Title")?.innerText ||
          datas.workListTenant3Title;

        let workListTenant1Description =
          document.getElementById("workListTenant1Description")?.innerText ||
          datas.workListTenant1Description;
        let workListTenant2Description =
          document.getElementById("workListTenant2Description")?.innerText ||
          datas.workListTenant2Description;
        let workListTenant3Description =
          document.getElementById("workListTenant3Description")?.innerText ||
          datas.workListTenant3Description;

        let landlordHome1Title =
          document.getElementById("landlordHome1Title")?.innerText ||
          datas.landlordHome1Title;
        let landlordHome2Title =
          document.getElementById("landlordHome2Title")?.innerText ||
          datas.landlordHome2Title;
        let landlordHome3Title =
          document.getElementById("landlordHome3Title")?.innerText ||
          datas.landlordHome3Title;

        let landlordHome1Description =
          document.getElementById("landlordHome1Description")?.innerText ||
          datas.landlordHome1Description;
        let landlordHome2Description =
          document.getElementById("landlordHome2Description")?.innerText ||
          datas.landlordHome2Description;
        let landlordHome3Description =
          document.getElementById("landlordHome3Description")?.innerText ||
          datas.landlordHome3Description;

        let experienceSectionHome1Title = document.getElementById(
          "experienceSectionHome1Title"
        ).innerText;
        let experienceSectionHome2Title = document.getElementById(
          "experienceSectionHome2Title"
        ).innerText;
        let experienceSectionHome3Title = document.getElementById(
          "experienceSectionHome3Title"
        ).innerText;

        let experienceSectionHome1Description = document.getElementById(
          "experienceSectionHome1Description"
        ).innerText;
        let experienceSectionHome2Description = document.getElementById(
          "experienceSectionHome2Description"
        ).innerText;
        let experienceSectionHome3Description = document.getElementById(
          "experienceSectionHome3Description"
        ).innerText;

        let workSectionTitle1 =
          document.getElementById("workSectionTitle1").innerText;
        let workSectionSubTitle1 = document.getElementById(
          "workSectionSubTitle1"
        ).innerText;

        let ExperienceSectionTitle1 = document.getElementById(
          "ExperienceSectionTitle1"
        ).innerText;
        let ExperienceSectionSubTitle1 = document.getElementById(
          "ExperienceSectionSubTitle1"
        ).innerText;

        let ExperienceListImg1 = document
          .getElementById("ExperienceListImg1")
          .getAttribute("src");
        let ExperienceListImg2 = document
          .getElementById("ExperienceListImg2")
          .getAttribute("src");
        let ExperienceListImg3 = document
          .getElementById("ExperienceListImg3")
          .getAttribute("src");

        let homeobj: any = {};
        homeobj.workListTenant1Title = workListTenant1Title;
        homeobj.workListTenant2Title = workListTenant2Title;
        homeobj.workListTenant3Title = workListTenant3Title;

        homeobj.workListTenant1Description = workListTenant1Description;
        homeobj.workListTenant2Description = workListTenant2Description;
        homeobj.workListTenant3Description = workListTenant3Description;

        homeobj.landlordHome1Title = landlordHome1Title;
        homeobj.landlordHome2Title = landlordHome2Title;
        homeobj.landlordHome3Title = landlordHome3Title;

        homeobj.landlordHome1Description = landlordHome1Description;
        homeobj.landlordHome2Description = landlordHome2Description;
        homeobj.landlordHome3Description = landlordHome3Description;

        homeobj.experienceSectionHome1Title = experienceSectionHome1Title;
        homeobj.experienceSectionHome2Title = experienceSectionHome2Title;
        homeobj.experienceSectionHome3Title = experienceSectionHome3Title;

        homeobj.experienceSectionHome1Description =
          experienceSectionHome1Description;
        homeobj.experienceSectionHome2Description =
          experienceSectionHome2Description;
        homeobj.experienceSectionHome3Description =
          experienceSectionHome3Description;

        homeobj.workSectionTitle1 = workSectionTitle1;
        homeobj.workSectionSubTitle1 = workSectionSubTitle1;

        homeobj.ExperienceSectionTitle1 = ExperienceSectionTitle1;
        homeobj.ExperienceSectionSubTitle1 = ExperienceSectionSubTitle1;

        homeobj.ExperienceListImg1 = ExperienceListImg1;
        homeobj.ExperienceListImg2 = ExperienceListImg2;
        homeobj.ExperienceListImg3 = ExperienceListImg3;

        let homeData = JSON.stringify(homeobj);
        let newPayloadHome = [
          {
            content: homeData,
            meta_description: cmsData[0]?.meta_description,
            meta_title: cmsData[0]?.meta_title,
            page_name: cmsData[0]?.page_name,
            id: cmsData[0]?.id,
            language_id: cmsData[0]?.language_id,
          },
        ];

        dispatch(appActions.disableInput(false));
        dispatch(
          cmsActions.updateCMSPage({
            updateCms: { data: newPayloadHome },
          })
        );
        break;

      case "terms&conditions":
        let termsConditionTitle = document.getElementById(
          "termsConditionTitle"
        ).innerText;
        let termsConditionSubTitle = document.getElementById(
          "termsConditionSubTitle"
        ).innerText;

        let termsConditionObj: any = {};
        termsConditionObj.termsConditionTitle = termsConditionTitle;
        termsConditionObj.termsConditionSubTitle = termsConditionSubTitle;

        let termsConditionData = JSON.stringify(termsConditionObj);

        let newPayloadTermsCondition = [
          {
            content: termsConditionData,
            meta_description: cmsData[0]?.meta_description,
            meta_title: cmsData[0]?.meta_title,
            page_name: cmsData[0]?.page_name,
            id: cmsData[0]?.id,
            language_id: cmsData[0]?.language_id,
          },
        ];
        dispatch(appActions.disableInput(false));
        dispatch(
          cmsActions.updateCMSPage({
            updateCms: { data: newPayloadTermsCondition },
          })
        );
        break;

      case "privacy-policy":
        let privacyPolicyTitle =
          document.getElementById("privacyPolicyTitle").innerText;
        let privacyPolicySubTitle = document.getElementById(
          "privacyPolicySubTitle"
        ).innerText;

        let privacyPolicyObj: any = {};
        privacyPolicyObj.privacyPolicyTitle = privacyPolicyTitle;
        privacyPolicyObj.privacyPolicySubTitle = privacyPolicySubTitle;

        let privacyPolicyData = JSON.stringify(privacyPolicyObj);
        let newPayloadPrivacyPolicy = [
          {
            content: privacyPolicyData,
            meta_description: cmsData[0]?.meta_description,
            meta_title: cmsData[0]?.meta_title,
            page_name: cmsData[0]?.page_name,
            id: cmsData[0]?.id,
            language_id: cmsData[0]?.language_id,
          },
        ];
        dispatch(appActions.disableInput(false));
        dispatch(
          cmsActions.updateCMSPage({
            updateCms: { data: newPayloadPrivacyPolicy },
          })
        );
        break;

        case'cookie-policy':
        let cookiePolicyTitle=document.getElementById('cookiePolicyTitle').innerText;
        let cookiePolicySubTitle=document.getElementById('cookiePolicySubTitle').innerText;
        
        let cookieObj:any={}
        cookieObj.cookiePolicyTitle=cookiePolicyTitle;
        cookieObj.cookiePolicySubTitle=cookiePolicySubTitle

        let cookieData=JSON.stringify(cookieObj);

        let newPayloadCookie=[{
          content: cookieData,
            meta_description: cmsData[0]?.meta_description,
            meta_title: cmsData[0]?.meta_title,
            page_name: cmsData[0]?.page_name,
            id: cmsData[0]?.id,
            language_id: cmsData[0]?.language_id,
        }]

        dispatch(appActions.disableInput(false));
        dispatch(
          cmsActions.updateCMSPage({
            updateCms: { data: newPayloadCookie },
          })
        );
        break;




      default:
        break;
    }
  };
  let datas = pageContent && JSON.parse(pageContent);
  const selectLang = (id: any) => {
    return (
      <Form name={id} form={pageName && form}>
        {header && (
          <div className="header-wrapper">
            <Form.Item label="" name="page_name">
              <Input
                disabled={disableInput}
                placeholder="Enter Page Name*"
                onChange={(e) => {
                  const newArray = [...payload];
                  payload.map((item: any, index) => {
                    if (item.language_id === id) {
                      newArray[index] = {
                        ...newArray[index],
                        page_name: e.target.value,
                      };
                    }
                  });
                  dispatch(cmsActions.addContent(newArray));
                }}
              />
            </Form.Item>
            <div className="btn-wrapper">
              {disableInput ? (
                <>
                  <CustomButton
                    className="fill"
                    onClick={() => dispatch(appActions.disableInput(false))}
                  >
                    Edit
                  </CustomButton>
                  <CustomButton>Delete</CustomButton>
                </>
              ) : (
                <>
                  <CustomButton
                    className="fill"
                    // onClick={() => {
                    //   // router.push('/admin/static-page-management');
                    //   dispatch(appActions.disableInput(false));
                    //   dispatch(
                    //     cmsActions.updateCMSPage({
                    //       updateCms: { data: payload },
                    //     })
                    //   );
                    // }}
                    onClick={handleSavePage}
                  >
                    Save
                  </CustomButton>
                  <CustomButton
                    onClick={() => dispatch(appActions.disableInput(true))}
                  >
                    Cancel
                  </CustomButton>
                </>
              )}
            </div>
          </div>
        )}
        {/* <Form.Item label='Language' name='language_id'>
          <Radio.Group
            defaultValue={5}
            options={langOptions}
            onChange={onRadioChange}
            value={radioValue}
            disabled={disableInput}
          />
        </Form.Item> */}

        {!header && (
          <Form.Item label="Page Name" name="page_name" className="w-50">
            <Input
              disabled={disableInput}
              placeholder="Enter Page Name*"
              onChange={(e) => {
                const newArray = [...payload];
                payload.map((item: any, index) => {
                  if (item.language_id === id) {
                    newArray[index] = {
                      ...newArray[index],
                      page_name: e.target.value,
                    };
                  }
                });
                dispatch(cmsActions.addContent(newArray));
              }}
            />
          </Form.Item>
        )}

        <Form.Item label="Meta Title" name="meta_title" className="w-50">
          <Input
            disabled={disableInput}
            placeholder="Enter Meta Title*"
            onChange={(e) => {
              const newArray = [...payload];
              payload.map((item: any, index) => {
                if (item.language_id === id) {
                  newArray[index] = {
                    ...newArray[index],
                    meta_title: e.target.value,
                  };
                }
              });
              dispatch(cmsActions.addContent(newArray));
            }}
          />
        </Form.Item>

        <Form.Item
          label="Meta Description"
          name="meta_description"
          className="w-50 remove-mr"
          //   rules={[{ required: true, message: appConstant.formValidation.role }]}
        >
          <Input
            disabled={disableInput}
            placeholder="Enter Meta Description*"
            onChange={(e) => {
              const newArray = [...payload];
              payload.map((item: any, index) => {
                if (item.language_id === id) {
                  newArray[index] = {
                    ...newArray[index],
                    meta_description: e.target.value,
                  };
                }
              });
              dispatch(cmsActions.addContent(newArray));
            }}
          />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
          //   rules={[{ required: true, message: appConstant.formValidation.role }]}
        >
          {pageName === "about-us" && (
            <AboutUs isEdit={true} isClicked={toggle} />
          )}
          {pageName === "contact-us" && <ContactUs isEdit={true} />}
          {pageName === "pricing" && <Pricing isEdit={true} />}
          {pageName === "faq" && <Faq isEdit={true} />}
          {pageName === "home" && <LendingPage isEdit={true} />}
          {pageName === "terms&conditions" && <TermsConditions isEdit={true} />}
          {pageName === "privacy-policy" && <PrivacyPolicy isEdit={true} />}
          {pageName === 'cookie-policy' && <CookiePolicy isEdit={true}/>}
        </Form.Item>

        {!header && (
          <Form.Item>
            <div className="btn-wrapper">
              <CustomButton className="fill" onClick={handleSave}>
                Save
              </CustomButton>
              <CustomButton
                onClick={() => router.push("/admin/static-page-management")}
              >
                Cancel
              </CustomButton>
            </div>
          </Form.Item>
        )}
      </Form>
    );
  };
  const tabList: any = langOptions.map((item: any) => {
    let tab = {
      key: item.value,
      label: item.label,
      children: selectLang(item.value),
    };
    return tab;
  });
  const [input, setInput] = useState<any>([]);
  const [activeKey, setActiveKey] = useState<any>(1);
  const getInitValues = (id) => {
    let edit = editData.filter((item: any) => item.language_id === id);
    if (edit.length > 0) {
      form.setFieldsValue({
        content: edit[0].content,
        meta_description: edit[0].meta_description,
        meta_title: edit[0].meta_title,
        page_name: edit[0].page_name,
      });
      setContentData(edit[0].content);
    }
  };

  useEffect(() => {
    editData.length > 0 && getInitValues(activeKey);
  }, [editData]);
  return (
    <AddPagesWrapper>
      <Tabs
        defaultActiveKey={"1"}
        items={tabList}
        onChange={(e) => {
          setActiveKey(e);
          getInitValues(e);
        }}
      />
    </AddPagesWrapper>
  );
};

export default AddPages;
