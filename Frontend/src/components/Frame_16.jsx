import rectangle_2922 from "./rectangle_2922.svg";
import ButtonHide from "./ButtonHide";
import VuesaxLinearNotification from "./VuesaxLinearNotification";
import rectangle_28 from "./rectangle_28.jpg";
import Edit_02 from "./Edit_02";
import VuesaxBulkFolderOpen from "./VuesaxBulkFolderOpen";
import ChevronRight from "./ChevronRight";
export const Frame_16 = ({ override }) => {
  const buttonHideProps = [
    {
      property_1: "Group 21",
      override: {
        position: "absolute",
        top: "0px",
        left: "0px",
      },
    },
    {
      property_1: "Group 22",
      override: {
        position: "absolute",
        top: "93.58px",
        left: "0px",
      },
    },
    {
      property_1: "Group 22",
      override: {
        position: "absolute",
        top: "187.16px",
        left: "0px",
      },
    },
    {
      property_1: "Group 22",
      override: {
        position: "absolute",
        top: "374.31px",
        left: "0px",
      },
    },
  ];
  return (
    <div
      className="overflow-hidden rounded-[2.5rem] relative w-full h-[869px] font-[Poppins]"
      style={override}
    >
      <img
        className="absolute w-[1920px] left-0 h-[869px] top-0"
        src={rectangle_2922.src}
      />
      <div>
        <div className="absolute w-[100px] left-[82px] h-[869px] top-0 bg-[rgb(247,_249,_252)]" />
        <div className="absolute w-[104px] left-[83px] h-[447px] top-[40.98px]">
          {buttonHideProps.map((props, i) => (
            <ButtonHide {...props} key={i} />
          ))}
          <div className="absolute w-2.5 left-[55.89px] h-2.5 top-[395.11px] bg-[rgb(51,_102,_255)] rounded-[50%]" />
        </div>
        <ButtonHide
          property_1="Group 22"
          override={{
            position: "absolute",
            top: "649.23px",
            left: "83px",
          }}
        />
        <ButtonHide
          property_1="Group 22"
          override={{
            position: "absolute",
            top: "742.81px",
            left: "83px",
          }}
        />
      </div>
      <div className="absolute w-[1613px] left-[236.08px] h-px top-[88.68px] bg-[rgb(247,_249,_252)]" />
      <p className="absolute left-[277.67px] top-[121.17px] text-[rgb(46,_58,_89)] text-[25.99px] font-black leading-[36.39px]">
        Scholarships
      </p>
      <p className="absolute left-[1264.14px] top-[121.17px] text-[rgb(46,_58,_89)] text-[25.99px] font-black leading-[36.39px]">
        User profile
      </p>
      <VuesaxLinearNotification
        override={{
          height: "31px",
          width: "31px",
          position: "absolute",
          top: "39.39px",
          left: "1672.24px",
        }}
      />
      <div className="absolute w-[52px] left-[1734.63px] h-[52px] top-[30.99px] bg-[rgb(196,_196,_196)] rounded-[50%]" />
      <div className="absolute w-[52px] left-[1734.63px] h-[52px] top-[28.99px] rounded-full overflow-hidden">
        <div className="bg-[rgb(196,_196,_196)] absolute h-full w-full" />
        <img
          className="object-cover absolute h-full w-full"
          src={rectangle_28.src}
        />
      </div>
      <div>
        <p className="absolute left-[304.8px] top-[376.23px] text-[rgb(46,_58,_89)] text-[24.88px] font-black leading-[34.83px]">
          Bio
        </p>
        <div className="absolute w-[481px] left-[278px] h-[495px] top-[356.13px] border-solid border-[rgb(240,_240,_240)] border-[5.74px] rounded-[19.14px]" />
        <p className="absolute w-[441px] left-[307.67px] top-[420.27px] text-[rgb(44,_44,_44)] text-[17.23px] font-normal tracking-[0.58px] leading-[37.33px]">
          I am a Lead Designer highly experienced in solving performance,
          accessibility and User eXperience issues. I spent the last 10 years
          designing websites and applications &amp; and pushing organization
          forwards.
          <br />I also know Front-End Development constraints and I am able to
          fill the gap between designers and developers in a team, with solution
          based on Atomic Design and tools like Design System.
          <br />I also know Front-End Development constraints and I am able to
          fill the gap between designers.
        </p>
        <div className="filter blur-[9.571885108947754px] absolute w-[459px] left-[298.1px] h-[67px] top-[771.55px] bg-white" />
        <p className="absolute left-[475.18px] top-[800.27px] text-[rgb(28,_165,_98)] text-[19.14px] font-[Plus_Jakarta_Sans] font-medium">
          Show more
        </p>
        <Edit_02
          override={{
            position: "absolute",
            top: "379px",
            left: "714px",
          }}
        />
        <Edit_02
          override={{
            position: "absolute",
            top: "379px",
            left: "1219px",
          }}
        />
        <Edit_02
          override={{
            position: "absolute",
            top: "379px",
            left: "1724px",
          }}
        />
      </div>
      <div>
        <p className="absolute left-[813.07px] top-[376.23px] text-[rgb(46,_58,_89)] text-[24.88px] font-black leading-[34.83px]">
          Skills
        </p>
        <div className="absolute w-[481px] left-[786.27px] h-[495px] top-[356.13px] border-solid border-[rgb(240,_240,_240)] border-[5.74px] rounded-[19.14px]" />
        <p className="absolute left-[171.68%] -right-[124.86%] w-[53.17%] text-[rgb(44,_44,_44)] text-xl font-[Fira_Sans] font-normal tracking-[0.33px] leading-[54.29px]">
          User Experience (UX)
          <br />
          User Interview
          <br />
          Wireframing / Prototyping
          <br />
          User Interface / Design (UI)
          <br />
          Front-End Development
          <br />
          Back-End Development
          <br />
          Speaker / Writer / Teacher
        </p>
        <div className="filter blur-[9.571885108947754px] absolute w-[459px] left-[806.37px] h-[67px] top-[771.55px] bg-white" />
        <p className="absolute left-[983.45px] top-[800.27px] text-[rgb(28,_165,_98)] text-[19.14px] font-[Plus_Jakarta_Sans] font-medium">
          Show more
        </p>
      </div>
      <div>
        <p className="absolute left-[1321.34px] top-[376.23px] text-[rgb(46,_58,_89)] text-[24.88px] font-black leading-[34.83px]">
          Achievements
        </p>
        <div className="absolute w-[481px] left-[1294.53px] h-[495px] top-[356.13px] border-solid border-[rgb(240,_240,_240)] border-[5.74px] rounded-[19.14px]" />
        <p className="absolute left-[277.38%] -right-[247.27%] w-[69.9%] text-[rgb(44,_44,_44)] text-[19.1px] font-[Fira_Sans] font-normal tracking-[0.28px] leading-[44.88px]">
          2 Years Degree In Web Design (2009-2010)
          <br />
          Udemy: UXD Essentials
          <br />
          Udemy: UX Applied to Product Design
          <br />
          Alsacr&#xe9;ations Trainings: HTML, CSS, JS
        </p>
        <p className="absolute left-[277.38%] -right-[247.27%] w-[69.9%] text-[rgb(44,_44,_44)] text-[19.1px] font-[Fira_Sans] font-normal tracking-[0.28px] leading-[44.88px]">
          2 Years Degree In Web Design (2009-2010)
          <br />
          Udemy: UXD Essentials
        </p>
        <div className="filter blur-[9.571885108947754px] absolute w-[459px] left-[1314.64px] h-[67px] top-[771.55px] bg-white" />
        <p className="absolute left-[1491.72px] top-[800.27px] text-[rgb(28,_165,_98)] text-[19.14px] font-[Plus_Jakarta_Sans] font-medium">
          Show more
        </p>
      </div>
      <div className="absolute w-[522px] left-[1264.14px] h-[104px] top-[187.45px] bg-[rgb(247,_249,_252)] rounded-[10.4px]" />
      <div className="overflow-hidden absolute w-[945px] left-[277.67px] h-[104px] top-[188.75px]">
        <div>
          <div className="absolute w-60 left-0 h-[104px] top-0 bg-[rgba(51,_102,_255,_0.2)] rounded-[10.4px]" />
          <VuesaxBulkFolderOpen
            override={{
              height: "42px",
              width: "42px",
              position: "absolute",
              top: "31.19px",
              left: "20.8px",
            }}
          />
          <p className="absolute left-[74.08px] top-[38.39px] text-[rgb(51,_102,_255)] text-[20.8px] font-medium leading-[31.19px]">
            School
          </p>
          <ChevronRight
            override={{
              position: "absolute",
              top: "36.39px",
              left: "188.46px",
            }}
          />
        </div>
        <div>
          <div className="absolute w-60 left-[282.03px] h-[104px] top-0 bg-[rgba(255,_51,_63,_0.2)] rounded-[10.4px]" />
          <VuesaxBulkFolderOpen
            override={{
              height: "42px",
              width: "42px",
              position: "absolute",
              top: "31.19px",
              left: "302.83px",
            }}
          />
          <p className="absolute left-[359.82px] top-[20.8px] text-[rgb(255,_51,_63)] text-[20.5px] font-medium leading-[31.19px]">
            Higher
            <br />
            Studies
          </p>
          <ChevronRight
            override={{
              position: "absolute",
              top: "36.39px",
              left: "483.49px",
              overflow: "visible",
            }}
          />
        </div>
        <div>
          <div className="absolute w-60 left-[564.07px] h-[104px] top-0 bg-[rgba(255,_149,_51,_0.2)] rounded-[10.4px]" />
          <VuesaxBulkFolderOpen
            override={{
              height: "42px",
              width: "42px",
              position: "absolute",
              top: "31.19px",
              left: "584.86px",
              overflow: "visible",
            }}
          />
          <p className="absolute left-[637.85px] top-[37.39px] text-[rgb(255,_149,_51)] text-[20.8px] font-medium leading-[31.19px]">
            Bachelors
          </p>
          <ChevronRight
            override={{
              position: "absolute",
              top: "36.39px",
              left: "752.52px",
              overflow: "visible",
            }}
          />
        </div>
        <div>
          <div className="absolute w-60 left-[846.1px] h-[104px] top-0 bg-[rgba(57,_222,_84,_0.2)] rounded-[10.4px]" />
          <VuesaxBulkFolderOpen
            override={{
              height: "42px",
              width: "42px",
              position: "absolute",
              top: "31.19px",
              left: "866.9px",
              overflow: "visible",
            }}
          />
          <p className="absolute left-[918.89px] top-[36.39px] text-[rgb(57,_222,_84)] text-[20.8px] font-medium leading-[31.19px]">
            Audio files
          </p>
          <ChevronRight
            override={{
              position: "absolute",
              top: "36.39px",
              left: "1034.56px",
              overflow: "visible",
            }}
          />
        </div>
      </div>
      <div
        className="absolute w-[99px] left-[1123.77px] h-[104px] top-[188.75px]"
        style={{
          background:
            "linear-gradient(-90deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.00) 66.66666865348816%)",
        }}
      />
      <ChevronRight
        override={{
          position: "absolute",
          top: "154.96px",
          left: "1755.42px",
          transform: "scale(-100%, 100%)",
          rotate: "-180.0deg",
        }}
      />
      <div>
        <p className="absolute left-[1368.11px] top-[213.45px] text-[rgb(46,_58,_89)] text-[20.8px] font-medium leading-[31.19px]">
          Maharrm Hasanli
        </p>
        <p className="absolute left-[1368.11px] top-[244.64px] text-[rgb(143,_155,_179)] text-[15.6px] font-normal leading-[20.8px]">
          maga.hesenli@gmail.com
        </p>
        <div className="absolute w-[62px] left-[1295.33px] h-[62px] top-[208.25px] rounded-[5.2px] overflow-hidden">
          <div className="bg-[rgb(196,_196,_196)] absolute h-full w-full" />
          <img
            className="object-cover absolute h-full w-full"
            src={rectangle_28.src}
          />
        </div>
      </div>
      <div>
        <p className="absolute left-[1732.82px] top-[203.05px] text-[rgb(46,_58,_89)] text-[25.99px] font-medium leading-[36.39px]">
          18
        </p>
        <p className="absolute left-[1667.04px] top-[208.25px] text-[rgb(46,_58,_89)] text-[18.2px] font-normal leading-[25.99px]">
          Age
        </p>
      </div>
      <div>
        <p className="absolute left-[1740.23px] top-[239.44px] text-[rgb(46,_58,_89)] text-[25.99px] font-medium leading-[36.39px]">
          2
        </p>
        <p className="absolute left-[1643.75px] top-[244.64px] text-[rgb(46,_58,_89)] text-[18.2px] font-normal leading-[25.99px]">
          Grants
        </p>
      </div>
      <div className="absolute w-[116px] left-[1639.75px] h-px top-[238.14px] bg-[rgb(240,_240,_240)] rounded-full" />
      <p className="absolute left-[243.05px] top-[44.19px] text-[rgb(46,_58,_89)] text-[31.19px] font-normal leading-[41.59px]">
        Hello, Devam
      </p>
    </div>
  );
};

export default Frame_16;