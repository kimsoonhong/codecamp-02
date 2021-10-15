import { useRef, useState } from "react";
import "../../pages/proflie/";

import { Dropdown, Modal } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function ProfilePage() {
  const [isModal, setIsModal] = useState(false);

  const st = useRef();
  const nd = useRef();
  const ed = useRef();
  const th = useRef();

  const onClickst = () => {
    st.current.click();
  };
  const onClicknd = () => {
    nd.current.click();
  };
  const onClicked = () => {
    ed.current.click();
  };
  const onClickth = () => {
    th.current.click();
  };

  const onClickModal = () => {
    setIsModal(true);
  };

  const menuIso = (
    <div className="career__description">
      선상생활을 바탕으로 약 6년간 안전관리자 및 품질관리자로 근무하며 다양한
      종류의 심사와 검사를 주관하여 수행하였습니다. <br /> 내부심사와 같은
      경험이 향후 개발자로서 어떠한 큰 흐름을 이해하는데 큰 도움이 될것이라
      생각합니다.
    </div>
  );
  const menuKTL = (
    <div className="career__description">
      교육 기간동안 iso 9001 심사관보, 산업안전기사, 품질경영산업기사, 위험물
      산업기사 자격을 취득하였습니다. <br /> 이때의 성공경험이 개발자로 진로를
      잡고자 할때 큰 자신감을 주었다고 생각합니다.
    </div>
  );
  const menuCodecamp = (
    <div className="career__description">
      부트캠프 기간동안 React의 클래스형 컴포넌트와 Node.js의 SSR 그리고
      Graphql과 Apollo의 운용방법과 이에 필요한 기본적인 이론을 숙지하였습니다.
      <br />
      HTML과 CSS 그리고 TypeScript를 자신있게 사용 할 수 있으며, 이를 바탕으로
      복잡한 수준의 웹사이트를 개발 해낼 수 있고 백엔드 서와의 원활한 통신이
      가능합니다.
    </div>
  );

  // const [visible, setVisible] = useState(false);

  // const handleMenuClick = (e) => {
  //   if (e.key === "3") {
  //     this.setState({ visible: false });
  //   }
  // };

  // const handleVisibleChange = (flag) => {
  //   setVisible({ visible: flag });
  // };

  return (
    <>
      {isModal && (
        <div>
          <Modal
            closable={false}
            visible={isModal}
            onOk={() => setIsModal(false)}
            onCancel={() => setIsModal(false)}
          >
            <div>
              <div style={{ marginBottom: "6px" }}>
                E-mail : shong1332@naver.com
              </div>
              <div style={{ marginBottom: "6px" }}>Phone : 010-6207-1147</div>
              <div style={{ marginBottom: "6px" }}>
                Profile :{" "}
                <a
                  // href="https://github.com/kimsoonhong/codecamp-02"
                  href="https://chartreuse-zydeco-fd9.notion.site/8583e7aa3c4b425fb541f648c33c62b7"
                  style={{ color: "black" }}
                >
                  Click Me
                </a>
              </div>
              <div style={{ marginBottom: "6px" }}>
                Github :{" "}
                <a
                  href="https://github.com/kimsoonhong/"
                  style={{ color: "black" }}
                >
                  Click Me
                </a>
              </div>
              <div style={{ marginBottom: "6px" }}>
                Blog :{" "}
                <a
                  href="https://velog.io/@shong1332 "
                  style={{ color: "black" }}
                >
                  Click Me
                </a>
              </div>
            </div>
          </Modal>
        </div>
      )}
      {/* <!-- Home --> */}
      <section id="home">
        <div className="home_container">
          <img
            src="/profile/me.jpg"
            alt="shong profile phoo"
            className="home__avatar"
          />
          <h1 className="home__title">
            Hello, <br />
            I`m shong
          </h1>
          <h2 className="home__description">
            공동의 목표 달성이 즐거운 프론트앤드 개발자 `김순홍` 입니다.
          </h2>
          <button className="home_contact" onClick={onClickModal}>
            Contact Me
          </button>
        </div>
      </section>
      {/* <!-- About --> */}
      <section id="about" className="section">
        <h1>About me</h1>
        <p
          style={{
            padding: "20px",
            borderRadius: "40px",
            backgroundColor: "#1b521f14",
          }}
        >
          도전을 두려워하지 않습니다. <br />
          좌절도 있었지만 노력하다보면 결국 해낼 수 있다는 자신감이 저의
          원동력입니다.
        </p>
        <br />
        <span className="aboutContent">
          도전과 성공경험, 긍정적인 사고로 포기하지 않고 해쳐나가는 개발자가
          되겠습니다.
        </span>
        <div className="section__container">
          <div className="about__career">
            <div className="career">
              <Dropdown overlay={menuIso}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    src="/profile/about/iso.png"
                    alt="iso"
                    className="career__icon my-bell "
                  />{" "}
                  <DownOutlined />
                </a>
              </Dropdown>
              <div style={{ height: "30px" }} />
              <h2 className="career__title">안전/품질 관리자</h2>
            </div>
            <div className="career">
              <Dropdown overlay={menuKTL}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    src="/profile/about/ktl.png"
                    alt="ktl"
                    className="career__icon__ktl my-bell secondBell"
                  />
                  <DownOutlined />
                </a>
              </Dropdown>
              <div style={{ height: "30px" }} />
              <h2 className="career__title">ktl 교육</h2>
            </div>
            <div className="career">
              <Dropdown overlay={menuCodecamp}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    src="/profile/about/codecamp.png"
                    alt="codecamp"
                    className="career__icon my-bell thirdBell "
                  />
                  <DownOutlined />
                </a>
              </Dropdown>
              <div style={{ height: "30px" }} />
              <h2 className="career__title">코드캠프</h2>
            </div>
          </div>

          <div className="jop">
            <h2 className="jop__name">NewBizStart</h2>
            <p className="jop__description">
              프론트엔드 개발팀 인턴기간동안 react와 각종 라이브러리를 실무에서
              적용시켜보고 UI작업 및 소셜로그인 기능을 구현해봄
            </p>
            <p className="jop__period">2021.10.01. ~ </p>
          </div>

          <div className="jop">
            <h2 className="jop__name">리더스</h2>
            <p className="jop__description">
              건설업 안전팀장으로서 근무하며 건설현장의 문서, 자원관리 업무를
              수행함
            </p>
            <p className="jop__period">2019.05.20. ~ 2019.11.01.</p>
          </div>

          <div className="jop">
            <h2 className="jop__name">All That Tankers</h2>
            <p className="jop__description">
              선박 안전관리팀의 팀장으로서 선임감독과 신입감독의 교육 및
              내외부심사을 총괄
            </p>
            <p className="jop__period">2018.11.01. ~ 2019.05.17.</p>
          </div>

          <div className="jop">
            <h2 className="jop__name">H.B.C</h2>
            <p className="jop__description">
              선박의 운항지원팀원으로서 자사선의 운항관리 및 운항 지원관리{" "}
            </p>
            <p className="jop__period">2017.08.21. ~ 2018.09.30.</p>
          </div>

          <div className="jop">
            <h2 className="jop__name">ForM</h2>
            <p className="jop__description">
              승선 경험을 바탕으로 안전관리자로서 선박과 선원의 전반적인 지원을
              담당{" "}
            </p>
            <p className="jop__period">2015.10.26. ~ 2017.08.18.</p>
          </div>

          <div className="about__jops">
            <div className="jop">
              <h2 className="jop__name">Sj tanker</h2>
              <p className="jop__description">
                고등학교 졸업 이후 2등항해사로서 약 5년간 승선근무
              </p>
              <p className="jop__period">2011.04.11. ~ 2015.08.04.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Skills --> */}
      <section id="skills" className="section">
        <div className="section__container">
          <h1>Skills</h1>
          <h2>Sills & Attributes</h2>

          <div className="skillset">
            <div className="skillset__language">
              <h3 className="skillset__title">Language</h3>
              <div className="skill__description">
                <div className="sktll_item">Javascript</div>

                <div className="sktll_item">HTML</div>
                <div className="sktll_item">CSS</div>
              </div>
            </div>
            <div className="skillset__FrameworkLibrary">
              <h3 className="skillset__title">Framework & Library</h3>
              <div className="skill__description">
                <div className="sktll_item">React & React-hooks</div>
                <div className="sktll_item">Node.js</div>
                <div className="sktll_item">Next.js</div>
                <div className="sktll_item">Emotion</div>
                <div className="sktll_item">Style-Component </div>
                <div className="sktll_item">TypeScript</div>
              </div>
            </div>
            <div className="skillset__network">
              <h3 className="skillset__title">Network</h3>
              <div className="skill__description">
                <div className="sktll_item">GraphQL & Apollo</div>
                <div className="sktll_item">Rest API & axios</div>
                <div className="sktll_item">Firebase</div>
              </div>
            </div>
            <div className="skillset__general">
              <h3 className="skillset__title">General</h3>
              <div className="skill__description">
                <div className="sktll_item">Git</div>
                <div className="sktll_item">Slack</div>
                <div className="sktll_item">Notion</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="section">
        <div className="section__container">
          <h1>My work</h1>
        </div>

        <div className="work__projects">
          <div>
            <a
              href="https://github.com/kimsoonhong/codecamp-02/tree/master/freeboard_frontend"
              className="project"
              target="blank"
            >
              <img
                src="/profile/about/st.png"
                alt="스크린샷 설명"
                className="project__img"
              />
              <div className="project__description active">
                <h3>git site</h3>
                <span style={{ fontsize: "12px" }}>
                  개인프로잭트 - <br />
                  자유게시판,중고마켓
                </span>
              </div>
            </a>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifycontent: "center",
                padding: "20px  ",
              }}
            >
              <div onClick={onClickst} className="project__Enter">
                자세히보기
              </div>
            </div>
          </div>

          <div style={{ margin: "0 10px" }}>
            <a
              href="https://github.com/kimsoonhong/pengsooz"
              className="project"
              target="blank"
            >
              <img
                src="/profile/about/nd.png"
                alt="스크린샷 설명"
                className="project__img"
              />
              <div className="project__description active">
                <h3>git site</h3>
                <span style={{ fontsize: "12px" }}>
                  팀 프로잭트 -<br /> 팽렐로
                </span>
              </div>
            </a>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifycontent: "center",
                padding: "20px  ",
              }}
            >
              <div onClick={onClicknd} className="project__Enter">
                자세히보기
              </div>
            </div>
          </div>

          <div>
            <a
              href="https://github.com/kimsoonhong/portfolio"
              className="project"
              target="blank"
            >
              <img
                src="/profile/about/ed.png"
                alt="스크린샷 설명"
                className="project__img"
              />
              <div className="project__description">
                <h3>git site</h3>
                <span style={{ fontsize: "12px" }}>
                  개인프로잭트 - <br />
                  자기소개서
                </span>
              </div>
            </a>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifycontent: "center",
                // backgroundColor: "red",
                padding: "20px  ",
              }}
            >
              <div onClick={onClicked} className="project__Enter">
                자세히보기
              </div>
            </div>
          </div>

          <div style={{ marginLeft: " 10px" }}>
            <a
              href="https://chartreuse-zydeco-fd9.notion.site/8583e7aa3c4b425fb541f648c33c62b7"
              className="project"
              target="blank"
            >
              <img
                src="/profile/about/th.png"
                alt="스크린샷 설명"
                className="project__img"
              />
              <div className="project__description active">
                <h3>Notion site</h3>
                <span style={{ fontsize: "12px" }}>
                  자기소개서 - <br />
                  Notion
                </span>
              </div>
            </a>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifycontent: "center",
                padding: "20px  ",
              }}
            >
              <div onClick={onClickth} className="project__Enter">
                자세히보기
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- arrow up --> */}
      <button className="arrow_up">
        <i className="fas fa-arrow-up"></i>
      </button>
      <a
        style={{ display: "none" }}
        ref={st}
        href="https://chartreuse-zydeco-fd9.notion.site/1c0ffc19cea04e5baf6b9a40badb8ab2"
      >
        st
      </a>
      <a
        style={{ display: "none" }}
        ref={nd}
        href="https://chartreuse-zydeco-fd9.notion.site/Trello-266750a3aadc4e99b796cdd9d26bf138"
      >
        st
      </a>
      <a
        style={{ display: "none" }}
        ref={ed}
        href="https://chartreuse-zydeco-fd9.notion.site/PortFolio-cb2ba3be436a4f2f843a14e39674e7e2"
      >
        dd
      </a>
      <a
        style={{ display: "none" }}
        ref={th}
        href=" https://chartreuse-zydeco-fd9.notion.site/8583e7aa3c4b425fb541f648c33c62b7"
      >
        dfs
      </a>
    </>
  );
}
