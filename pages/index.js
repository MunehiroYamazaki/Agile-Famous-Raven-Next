import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Agile Famous Raven</title>
          <meta property="og:title" content="Agile Famous Raven" />
        </Head>
        <div className="home-new-page">
          <div className="home-navbar-logo-left">
            <div className="home-navbar-container">
              <div className="home-navbar-content">
                <div className="home-navbar-brand">
                  <div className="home-logo"></div>
                </div>
                <div className="home-navbar-menu">
                  <div className="home-navbar-link">
                    <span className="home-text">
                      <span>About</span>
                    </span>
                  </div>
                  <div className="home-navbar-link1">
                    <span className="home-text002">
                      <span>Features</span>
                    </span>
                  </div>
                  <div className="home-navbar-link2">
                    <span className="home-text004">
                      <span>Pricing</span>
                    </span>
                  </div>
                  <button className="home-navbar-button">
                    <span className="home-text006">
                      <span>お問い合わせ</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="home-hero-stack">
            <div className="home-small-container">
              <div className="home-title-section">
                <div className="home-content">
                  <span className="home-text008">これはテストです</span>
                  <span className="home-text009">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <div className="home-actions">
                  <button className="home-button">
                    <span className="home-text011">
                      <span>GET STARTED</span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="home-image-wrapper">
                <div className="home-image"></div>
              </div>
            </div>
          </div>
          <div className="home-team-rectangles">
            <div className="home-container1">
              <div className="home-section-title">
                <span className="home-text013">
                  <span>Team section</span>
                </span>
                <span className="home-text015">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse tincidunt sagittis eros. Quisque quis euismod
                    lorem.
                  </span>
                </span>
              </div>
              <div className="home-columns">
                <div className="home-card">
                  <div className="home-image-wrapper01">
                    <div className="home-image1"></div>
                  </div>
                  <div className="home-info">
                    <span className="home-text017">
                      <span>Full name</span>
                    </span>
                    <span className="home-text019">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-card1">
                  <div className="home-image-wrapper02">
                    <div className="home-image2"></div>
                  </div>
                  <div className="home-info1">
                    <span className="home-text021">
                      <span>Full name</span>
                    </span>
                    <span className="home-text023">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-card2">
                  <div className="home-image-wrapper03">
                    <div className="home-image3"></div>
                  </div>
                  <div className="home-info2">
                    <span className="home-text025">
                      <span>Full name</span>
                    </span>
                    <span className="home-text027">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-features-list">
            <div className="home-columns1">
              <div className="home-column">
                <div className="home-content1">
                  <div className="home-intro">
                    <span className="home-text029">
                      <span>Features section</span>
                    </span>
                    <span className="home-text031">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse tincidunt sagittis eros. Quisque quis
                        euismod lorem. Etiam sodales ac felis id interdum.
                      </span>
                    </span>
                  </div>
                  <span className="home-text033">
                    <span>Learn more</span>
                  </span>
                </div>
              </div>
              <div className="home-column1">
                <div className="home-feature">
                  <div className="home-image-wrapper04">
                    <div className="home-image4"></div>
                  </div>
                  <span className="home-text035">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse tincidunt sagittis eros.
                    </span>
                  </span>
                </div>
                <div className="home-feature1">
                  <div className="home-image-wrapper05">
                    <div className="home-image5"></div>
                  </div>
                  <span className="home-text037">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse tincidunt sagittis eros.
                    </span>
                  </span>
                </div>
                <div className="home-feature2">
                  <div className="home-image-wrapper06">
                    <div className="home-image6"></div>
                  </div>
                  <span className="home-text039">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse tincidunt sagittis eros.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-logo-title">
            <span className="home-text041">
              <span>Clients Section</span>
            </span>
            <div className="home-content2">
              <div className="home-logos">
                <div className="home-logo-wrapper">
                  <div className="home-logo1"></div>
                </div>
                <div className="home-logo-wrapper1">
                  <div className="home-logo2"></div>
                </div>
                <div className="home-logo-wrapper2">
                  <div className="home-logo3"></div>
                </div>
                <div className="home-logo-wrapper3">
                  <div className="home-logo4"></div>
                </div>
                <div className="home-logo-wrapper4">
                  <div className="home-logo5"></div>
                </div>
                <div className="home-logo-wrapper5">
                  <div className="home-logo6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-pricing-comparison">
            <div className="home-columns2">
              <div className="home-column2">
                <div className="home-intro1">
                  <div className="home-image-wrapper07">
                    <div className="home-pricing1"></div>
                  </div>
                  <div className="home-name">
                    <span className="home-text043">
                      <span>Startup</span>
                    </span>
                    <span className="home-text045">
                      <span>Starting at</span>
                    </span>
                  </div>
                  <div className="home-pricing">
                    <span className="home-text047">
                      <span>$599/mo</span>
                    </span>
                  </div>
                  <div className="home-description">
                    <span className="home-text049">
                      <span>Lorem ipsum dolor</span>
                    </span>
                  </div>
                  <button className="home-button1">
                    <span className="home-text051">
                      <span>TALK TO AN EXPERT</span>
                    </span>
                  </button>
                </div>
                <div className="home-separator"></div>
                <div className="home-features">
                  <div className="home-pricing-feature">
                    <div className="home-icon">
                      <img
                        alt="IconWrapper2395"
                        src="/playground_assets/iconwrapper2395-r0jh.svg"
                        className="home-icon-wrapper"
                      />
                    </div>
                    <span className="home-text053">
                      <span>Lorem ipsum dolor sit amet</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature01">
                    <div className="home-icon01">
                      <img
                        alt="IconWrapper2400"
                        src="/playground_assets/iconwrapper2400-6hco.svg"
                        className="home-icon-wrapper01"
                      />
                    </div>
                    <span className="home-text055">
                      <span>Lorem ipsum dolor sit amet</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature02">
                    <div className="home-icon02">
                      <img
                        alt="IconWrapper2405"
                        src="/playground_assets/iconwrapper2405-wjt.svg"
                        className="home-icon-wrapper02"
                      />
                    </div>
                    <span className="home-text057">
                      <span>Lorem ipsum dolor sit amet</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature03">
                    <div className="home-icon03">
                      <img
                        alt="IconWrapper2410"
                        src="/playground_assets/iconwrapper2410-1srb.svg"
                        className="home-icon-wrapper03"
                      />
                    </div>
                    <span className="home-text059">
                      <span>Lorem ipsum dolor sit amet</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature04">
                    <div className="home-icon04">
                      <img
                        alt="IconWrapper2415"
                        src="/playground_assets/iconwrapper2415-21ha.svg"
                        className="home-icon-wrapper04"
                      />
                    </div>
                    <span className="home-text061">
                      <span>Lorem ipsum dolor sit amet</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature05">
                    <div className="home-icon05">
                      <img
                        alt="IconWrapper2420"
                        src="/playground_assets/iconwrapper2420-18jg.svg"
                        className="home-icon-wrapper05"
                      />
                    </div>
                    <span className="home-text063">
                      <span>Lorem ipsum dolor sit amet</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-column3">
                <div className="home-intro2">
                  <div className="home-image-wrapper08">
                    <div className="home-pricing2"></div>
                  </div>
                  <div className="home-name1">
                    <span className="home-text065">
                      <span>Growth</span>
                    </span>
                    <span className="home-text067">
                      <span>Starting at</span>
                    </span>
                  </div>
                  <div className="home-pricing1">
                    <span className="home-text069">
                      <span>$1,499/mo</span>
                    </span>
                  </div>
                  <div className="home-description1">
                    <span className="home-text071">
                      <span>Lorem ipsum dolor</span>
                    </span>
                  </div>
                  <button className="home-button2">
                    <span className="home-text073">
                      <span>TALK TO AN EXPERT</span>
                    </span>
                  </button>
                </div>
                <div className="home-separator1"></div>
                <div className="home-features1">
                  <div className="home-pricing-feature06">
                    <div className="home-icon06">
                      <img
                        alt="IconWrapper2440"
                        src="/playground_assets/iconwrapper2440-xnwm.svg"
                        className="home-icon-wrapper06"
                      />
                    </div>
                    <span className="home-text075">
                      <span>Etiam sodales ac felis id interdum</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature07">
                    <div className="home-icon07">
                      <img
                        alt="IconWrapper2445"
                        src="/playground_assets/iconwrapper2445-3zx.svg"
                        className="home-icon-wrapper07"
                      />
                    </div>
                    <span className="home-text077">
                      <span>Etiam sodales ac felis id interdum</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature08">
                    <div className="home-icon08">
                      <img
                        alt="IconWrapper2450"
                        src="/playground_assets/iconwrapper2450-lxkm.svg"
                        className="home-icon-wrapper08"
                      />
                    </div>
                    <span className="home-text079">
                      <span>Etiam sodales ac felis id interdum</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature09">
                    <div className="home-icon09">
                      <img
                        alt="IconWrapper2455"
                        src="/playground_assets/iconwrapper2455-ady.svg"
                        className="home-icon-wrapper09"
                      />
                    </div>
                    <span className="home-text081">
                      <span>Etiam sodales ac felis id interdum</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature10">
                    <div className="home-icon10">
                      <img
                        alt="IconWrapper2460"
                        src="/playground_assets/iconwrapper2460-5bmf.svg"
                        className="home-icon-wrapper10"
                      />
                    </div>
                    <span className="home-text083">
                      <span>Etiam sodales ac felis id interdum</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature11">
                    <div className="home-icon11">
                      <img
                        alt="IconWrapper2465"
                        src="/playground_assets/iconwrapper2465-h0jm.svg"
                        className="home-icon-wrapper11"
                      />
                    </div>
                    <span className="home-text085">
                      <span>Etiam sodales ac felis id interdum</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-column4">
                <div className="home-intro3">
                  <div className="home-image-wrapper09">
                    <div className="home-pricing3"></div>
                  </div>
                  <div className="home-name2">
                    <span className="home-text087">
                      <span>Enterprise</span>
                    </span>
                    <span className="home-text089">
                      <span>Starting at</span>
                    </span>
                  </div>
                  <div className="home-pricing2">
                    <span className="home-text091">
                      <span>$2,499/mo</span>
                    </span>
                  </div>
                  <div className="home-description2">
                    <span className="home-text093">
                      <span>Lorem ipsum dolor</span>
                    </span>
                  </div>
                  <button className="home-button3">
                    <span className="home-text095">
                      <span>TALK TO AN EXPERT</span>
                    </span>
                  </button>
                </div>
                <div className="home-separator2"></div>
                <div className="home-features2">
                  <div className="home-pricing-feature12">
                    <div className="home-icon12">
                      <img
                        alt="IconWrapper2485"
                        src="/playground_assets/iconwrapper2485-u2vq.svg"
                        className="home-icon-wrapper12"
                      />
                    </div>
                    <span className="home-text097">
                      <span>Lorem ipsum dolor sit amet</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature13">
                    <div className="home-icon13">
                      <img
                        alt="IconWrapper2490"
                        src="/playground_assets/iconwrapper2490-ru4l.svg"
                        className="home-icon-wrapper13"
                      />
                    </div>
                    <span className="home-text099">
                      <span>Lorem ipsum dolor sit amet</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature14">
                    <div className="home-icon14">
                      <img
                        alt="IconWrapper2495"
                        src="/playground_assets/iconwrapper2495-1lnq.svg"
                        className="home-icon-wrapper14"
                      />
                    </div>
                    <span className="home-text101">
                      <span>Lorem ipsum dolor sit amet</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature15">
                    <div className="home-icon15">
                      <img
                        alt="IconWrapper2500"
                        src="/playground_assets/iconwrapper2500-nys2.svg"
                        className="home-icon-wrapper15"
                      />
                    </div>
                    <span className="home-text103">
                      <span>Lorem ipsum dolor sit amet</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature16">
                    <div className="home-icon16">
                      <img
                        alt="IconWrapper2505"
                        src="/playground_assets/iconwrapper2505-2hof.svg"
                        className="home-icon-wrapper16"
                      />
                    </div>
                    <span className="home-text105">
                      <span>Lorem ipsum dolor sit amet</span>
                    </span>
                  </div>
                  <div className="home-pricing-feature17">
                    <div className="home-icon17">
                      <img
                        alt="IconWrapper2510"
                        src="/playground_assets/iconwrapper2510-viu8.svg"
                        className="home-icon-wrapper17"
                      />
                    </div>
                    <span className="home-text107">
                      <span>Lorem ipsum dolor sit amet</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-contactform">
            <div className="home-frame-container">
              <div className="home-section-title1">
                <span className="home-text109">
                  <span>Get in touch</span>
                </span>
                <span className="home-text111">
                  <span>Let us know how we can help</span>
                </span>
              </div>
              <div className="home-form-wrapper">
                <div className="home-form">
                  <div className="home-input-wrapper">
                    <span className="home-text113">
                      <span>Name</span>
                    </span>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="home-form-text-input"
                    />
                  </div>
                  <div className="home-input-wrapper1">
                    <span className="home-text115">
                      <span>Email</span>
                    </span>
                    <input
                      type="text"
                      placeholder="me@company.com"
                      className="home-form-text-input1"
                    />
                  </div>
                  <div className="home-textarea-wrapper">
                    <span className="home-text117">
                      <span>Message</span>
                    </span>
                    <div className="home-form-textarea">
                      <span className="home-text119">
                        <span>Your message...</span>
                      </span>
                    </div>
                  </div>
                  <button className="home-form-button">
                    <span className="home-text121">
                      <span>Send message</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="home-footer">
            <div className="home-columns3">
              <div className="home-column5">
                <div className="home-logo-wrapper6">
                  <div className="home-logo7"></div>
                </div>
              </div>
              <div className="home-small-columns">
                <div className="home-column6">
                  <div className="home-content3">
                    <span className="home-text123">
                      <span>COMPANY</span>
                    </span>
                    <div className="home-footer-links">
                      <span className="home-text125">
                        <span>How it works</span>
                      </span>
                      <span className="home-text127">
                        <span>Pricing</span>
                      </span>
                      <span className="home-text129">
                        <span>Demo</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-column7">
                  <div className="home-content4">
                    <span className="home-text131">
                      <span>RESOURCES</span>
                    </span>
                    <div className="home-footer-links1">
                      <span className="home-text133">
                        <span>Blog post name goes here</span>
                      </span>
                      <span className="home-text135">
                        <span>Blog post name goes here</span>
                      </span>
                      <span className="home-text137">
                        <span>Blog post name goes here</span>
                      </span>
                      <span className="home-text139">
                        <span>See all resources</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-column8">
                  <div className="home-content5">
                    <span className="home-text141">
                      <span>ABOUT</span>
                    </span>
                    <div className="home-footer-links2">
                      <span className="home-text143">
                        <span>Terms &amp; Conditions</span>
                      </span>
                      <span className="home-text145">
                        <span>Privacy Policy</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-copyright">
              <span className="home-text147">
                <span>Copyright © 2022 Company name</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-new-page {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            overflow-x: hidden;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-navbar-logo-left {
            display: flex;
            padding: 0 24px;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 0px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-navbar-container {
            width: 1200px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: center;
          }
          .home-navbar-content {
            width: 1200px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: space-between;
          }
          .home-navbar-brand {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
          }
          .home-logo {
            width: 141px;
            height: 36px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/3855f8f5-8016-4cca-90da-c647ff76b133-o5nm-200h.undefined');
          }
          .home-navbar-menu {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            border-color: transparent;
          }
          .home-navbar-link {
            display: flex;
            padding: 24px 12px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 32px;
          }
          .home-text {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-navbar-link1 {
            display: flex;
            padding: 24px 12px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 32px;
          }
          .home-text002 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-navbar-link2 {
            display: flex;
            padding: 24px 12px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 32px;
          }
          .home-text004 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-navbar-button {
            display: flex;
            padding: 8px 20px;
            position: relative;
            align-items: center;
            border-color: transparent;
            justify-content: center;
            background-color: rgba(0, 0, 0, 1);
          }
          .home-text006 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 12px;
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-hero-stack {
            display: flex;
            padding: 64px 24px;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            margin-bottom: 0px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-small-container {
            width: 960px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .home-title-section {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            margin-bottom: 40px;
            flex-direction: column;
          }
          .home-content {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            margin-bottom: 24px;
            flex-direction: column;
          }
          .home-text008 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 56px;
            align-self: stretch;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 24px;
            text-decoration: none;
          }
          .home-text009 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-actions {
            display: flex;
            padding: 16px 0 0 0;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
          }
          .home-button {
            padding: 12px 24px;
            position: relative;
            align-items: center;
            border-color: transparent;
            justify-content: center;
            background-color: rgba(0, 0, 0, 1);
            animation-play-state: flex;
          }
          .home-text011 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 12px;
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-image-wrapper {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .home-image {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/07202bf4-cc01-47f3-8f52-1224c8b0c4be-pbf-1000w.undefined');
          }
          .home-team-rectangles {
            width: 1440px;
            display: flex;
            padding: 64px 24px;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 0px;
            flex-direction: column;
            background-color: rgba(245, 247, 250, 1);
          }
          .home-container1 {
            width: 1200px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .home-section-title {
            width: 530px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 64px;
            flex-direction: column;
          }
          .home-text013 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 32px;
            align-self: stretch;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 16px;
            text-decoration: none;
          }
          .home-text015 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-columns {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
          }
          .home-card {
            width: 368px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 48px;
            flex-direction: column;
          }
          .home-image-wrapper01 {
            height: 180px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 0px;
            flex-direction: column;
          }
          .home-image1 {
            display: flex;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/15ec3a11-a99d-420e-8c81-89fa96688d4d-z91d-200h.undefined');
          }
          .home-info {
            display: flex;
            padding: 24px;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-text017 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0px;
            text-decoration: none;
          }
          .home-text019 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-card1 {
            width: 368px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 48px;
            flex-direction: column;
          }
          .home-image-wrapper02 {
            height: 180px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 0px;
            flex-direction: column;
          }
          .home-image2 {
            display: flex;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/85f09c9c-fd7f-4edb-9049-124981a4b5da-mq6r-200h.undefined');
          }
          .home-info1 {
            display: flex;
            padding: 24px;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-text021 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0px;
            text-decoration: none;
          }
          .home-text023 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-card2 {
            width: 368px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .home-image-wrapper03 {
            height: 180px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 0px;
            flex-direction: column;
          }
          .home-image3 {
            display: flex;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/f927b205-3165-42b2-a21b-779df5e56712-abde-200h.undefined');
          }
          .home-info2 {
            display: flex;
            padding: 24px;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-text025 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0px;
            text-decoration: none;
          }
          .home-text027 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-features-list {
            width: 1440px;
            display: flex;
            padding: 64px 24px;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 0px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-columns1 {
            width: 960px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: center;
          }
          .home-column {
            width: 440px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 80px;
            flex-direction: column;
          }
          .home-content1 {
            display: flex;
            padding: 24px 0;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .home-intro {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 24px;
            flex-direction: column;
          }
          .home-text029 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 16px;
            text-decoration: none;
          }
          .home-text031 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-text033 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-column1 {
            width: 440px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .home-feature {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-image-wrapper04 {
            width: 80px;
            height: 80px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 24px;
            justify-content: center;
          }
          .home-image4 {
            width: 80px;
            height: 80px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/d7290f11-d80f-4681-841c-24e1f20171d5-w174-200h.undefined');
          }
          .home-text035 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-feature1 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-image-wrapper05 {
            width: 80px;
            height: 80px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 24px;
            justify-content: center;
          }
          .home-image5 {
            width: 80px;
            height: 80px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/cb730638-b43c-4358-b774-ab0f34ca2298-1sc7-200h.undefined');
          }
          .home-text037 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-feature2 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
          }
          .home-image-wrapper06 {
            width: 80px;
            height: 80px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 24px;
            justify-content: center;
          }
          .home-image6 {
            width: 80px;
            height: 80px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/6e5519a6-04c0-44a2-8b20-bb077c7c1bdf-kavl-200h.undefined');
          }
          .home-text039 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-logo-title {
            width: 1440px;
            display: flex;
            padding: 64px 24px;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 0px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-text041 {
            color: rgba(0, 0, 0, 1);
            width: 560px;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 32px;
            text-decoration: none;
          }
          .home-content2 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
            justify-content: center;
          }
          .home-logos {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: center;
          }
          .home-logo-wrapper {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            margin-right: 48px;
            flex-direction: column;
            justify-content: center;
          }
          .home-logo1 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/2ec23e74-af30-4ddc-b6f5-5b82db8374e3-dusv-1500w.undefined');
          }
          .home-logo-wrapper1 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            margin-right: 48px;
            flex-direction: column;
            justify-content: center;
          }
          .home-logo2 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/3810b943-d290-46da-8f30-3f6c089351d6-mfm-1500w.undefined');
          }
          .home-logo-wrapper2 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            margin-right: 48px;
            flex-direction: column;
            justify-content: center;
          }
          .home-logo3 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/8aeb3f80-c9d3-4194-bcaa-4755e0e7e241-f3p-1500w.undefined');
          }
          .home-logo-wrapper3 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            margin-right: 48px;
            flex-direction: column;
            justify-content: center;
          }
          .home-logo4 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/1bf3b2f5-678d-4109-917f-758192be54eb-y7gh-1500w.undefined');
          }
          .home-logo-wrapper4 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            margin-right: 48px;
            flex-direction: column;
            justify-content: center;
          }
          .home-logo5 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/560262c3-a17a-4d3c-8c28-acf858cb92df-qgz-1500w.undefined');
          }
          .home-logo-wrapper5 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
            justify-content: center;
          }
          .home-logo6 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/7c00c2b8-55ac-4d00-b988-20b37736f5ce-w0g-1500w.undefined');
          }
          .home-pricing-comparison {
            width: 1440px;
            display: flex;
            padding: 64px 24px;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 0px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-columns2 {
            width: 960px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: space-between;
          }
          .home-column2 {
            width: 260px;
            display: flex;
            padding: 32px 0;
            position: relative;
            box-shadow: 0px 4px 130px 0px
              rgba(150, 163, 181, 0.11999999731779099);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-intro1 {
            display: flex;
            padding: 0 24px 32px 24px;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            margin-bottom: 24px;
            flex-direction: column;
          }
          .home-image-wrapper07 {
            width: 80px;
            height: 80px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
            justify-content: center;
          }
          .home-pricing1 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/390e5f0b-bf69-4a29-a2c9-2c6af1094951-nz3r-200h.undefined');
          }
          .home-name {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            margin-bottom: 16px;
            flex-direction: column;
          }
          .home-text043 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 40px;
            align-self: auto;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 179.99999523162842%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0px;
            text-decoration: none;
          }
          .home-text045 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
            justify-content: center;
          }
          .home-text047 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 24px;
            align-self: auto;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: 100%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-description {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-text049 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            align-self: auto;
            font-style: Medium;
            text-align: center;
            font-family: Inter;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-button1 {
            display: flex;
            padding: 16px 24px;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(33, 33, 33, 1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-text051 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 12px;
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-separator {
            height: 1px;
            display: flex;
            padding: 1px 0;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 24px;
            flex-direction: column;
            background-color: rgba(245, 245, 245, 1);
          }
          .home-features {
            display: flex;
            padding: 0 24px;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .home-pricing-feature {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text053 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature01 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon01 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper01 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text055 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature02 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon02 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper02 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text057 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature03 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon03 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper03 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text059 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature04 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon04 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper04 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text061 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature05 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
          }
          .home-icon05 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper05 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text063 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-column3 {
            width: 260px;
            display: flex;
            padding: 32px 0;
            position: relative;
            box-shadow: 0px 4px 130px 0px
              rgba(150, 163, 181, 0.30000001192092896);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-intro2 {
            display: flex;
            padding: 0 24px 32px 24px;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            margin-bottom: 24px;
            flex-direction: column;
          }
          .home-image-wrapper08 {
            width: 80px;
            height: 80px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
            justify-content: center;
          }
          .home-pricing2 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/d32ab52e-f8fe-456f-88c9-2230f223d041-czm8-200h.undefined');
          }
          .home-name1 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            margin-bottom: 16px;
            flex-direction: column;
          }
          .home-text065 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 40px;
            align-self: auto;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 179.99999523162842%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0px;
            text-decoration: none;
          }
          .home-text067 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing1 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
            justify-content: center;
          }
          .home-text069 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 24px;
            align-self: auto;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: 100%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-description1 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-text071 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            align-self: auto;
            font-style: Medium;
            text-align: center;
            font-family: Inter;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-button2 {
            display: flex;
            padding: 16px 24px;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(33, 33, 33, 1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            background-color: rgba(33, 33, 33, 1);
          }
          .home-text073 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 12px;
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-separator1 {
            height: 1px;
            display: flex;
            padding: 1px 0;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 24px;
            flex-direction: column;
            background-color: rgba(245, 245, 245, 1);
          }
          .home-features1 {
            display: flex;
            padding: 0 16px;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .home-pricing-feature06 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon06 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper06 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text075 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature07 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon07 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper07 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text077 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature08 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon08 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper08 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text079 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature09 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon09 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper09 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text081 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature10 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon10 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper10 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text083 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature11 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
          }
          .home-icon11 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper11 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text085 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-column4 {
            width: 260px;
            display: flex;
            padding: 32px 0;
            position: relative;
            box-shadow: 0px 4px 130px 0px
              rgba(150, 163, 181, 0.11999999731779099);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-intro3 {
            display: flex;
            padding: 0 24px 32px 24px;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            margin-bottom: 24px;
            flex-direction: column;
          }
          .home-image-wrapper09 {
            width: 80px;
            height: 80px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
            justify-content: center;
          }
          .home-pricing3 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/75590668-0874-4900-a627-71faa24944fc-tbza-200h.undefined');
          }
          .home-name2 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            margin-bottom: 16px;
            flex-direction: column;
          }
          .home-text087 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 40px;
            align-self: auto;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 179.99999523162842%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0px;
            text-decoration: none;
          }
          .home-text089 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing2 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
            justify-content: center;
          }
          .home-text091 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 24px;
            align-self: auto;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: 100%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-description2 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-text093 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            align-self: auto;
            font-style: Medium;
            text-align: center;
            font-family: Inter;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-button3 {
            display: flex;
            padding: 16px 24px;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(33, 33, 33, 1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-text095 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 12px;
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-separator2 {
            height: 1px;
            display: flex;
            padding: 1px 0;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 24px;
            flex-direction: column;
            background-color: rgba(245, 245, 245, 1);
          }
          .home-features2 {
            display: flex;
            padding: 0 24px;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .home-pricing-feature12 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon12 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper12 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text097 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature13 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon13 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper13 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text099 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature14 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon14 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper14 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text101 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature15 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon15 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper15 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text103 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature16 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 16px;
          }
          .home-icon16 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper16 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text105 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-pricing-feature17 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
          }
          .home-icon17 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 8px;
            justify-content: center;
          }
          .home-icon-wrapper17 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .home-text107 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-contactform {
            display: flex;
            padding: 64px 24px;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            margin-bottom: 0px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-frame-container {
            width: 1200px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .home-section-title1 {
            width: 530px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 40px;
            flex-direction: column;
          }
          .home-text109 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 32px;
            align-self: stretch;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 16px;
            text-decoration: none;
          }
          .home-text111 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-form-wrapper {
            width: 500px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .home-form {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .home-input-wrapper {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 16px;
            flex-direction: column;
          }
          .home-text113 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 8px;
            text-decoration: none;
          }
          .home-form-text-input {
            color: rgba(151, 151, 151, 1);
            display: flex;
            padding: 12px;
            position: relative;
            font-size: 14px;
            align-self: stretch;
            text-align: left;
            align-items: center;
            flex-shrink: 0;
            font-family: Inter;
            font-weight: 500;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-input-wrapper1 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 16px;
            flex-direction: column;
          }
          .home-text115 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 8px;
            text-decoration: none;
          }
          .home-form-text-input1 {
            color: rgba(151, 151, 151, 1);
            display: flex;
            padding: 12px;
            position: relative;
            font-size: 14px;
            align-self: stretch;
            text-align: left;
            align-items: flex-start;
            flex-shrink: 0;
            font-family: Inter;
            font-weight: 500;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-textarea-wrapper {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 16px;
            flex-direction: column;
          }
          .home-text117 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 8px;
            text-decoration: none;
          }
          .home-form-textarea {
            display: flex;
            padding: 12px;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-text119 {
            color: rgba(151, 151, 151, 1);
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-form-button {
            display: flex;
            padding: 12px 24px;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: center;
            background-color: rgba(0, 0, 0, 1);
          }
          .home-text121 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 12px;
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-footer {
            width: 1440px;
            display: flex;
            padding: 64px 24px 8px 24px;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            background-color: rgba(245, 247, 250, 1);
          }
          .home-columns3 {
            width: 960px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 40px;
            justify-content: space-between;
          }
          .home-column5 {
            width: 320px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .home-logo-wrapper6 {
            display: flex;
            padding: 16px 0 0 0;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
          }
          .home-logo7 {
            width: 141px;
            height: 36px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/2d340f4c-129d-4167-9831-21901f4572a4-39ju-200h.undefined');
          }
          .home-small-columns {
            width: 600px;
            display: flex;
            padding: 16px 0 0 0;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
          }
          .home-column6 {
            width: 178.6666717529297px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 32px;
            flex-direction: column;
          }
          .home-content3 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .home-text123 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 16px;
            text-decoration: none;
          }
          .home-footer-links {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .home-text125 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 8px;
            text-decoration: none;
          }
          .home-text127 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 8px;
            text-decoration: none;
          }
          .home-text129 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-column7 {
            width: 178.6666717529297px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 32px;
            flex-direction: column;
          }
          .home-content4 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .home-text131 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 16px;
            text-decoration: none;
          }
          .home-footer-links1 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .home-text133 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 8px;
            text-decoration: none;
          }
          .home-text135 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 8px;
            text-decoration: none;
          }
          .home-text137 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 8px;
            text-decoration: none;
          }
          .home-text139 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-column8 {
            width: 178.6666717529297px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .home-content5 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .home-text141 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 16px;
            text-decoration: none;
          }
          .home-footer-links2 {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .home-text143 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 8px;
            text-decoration: none;
          }
          .home-text145 {
            color: rgba(33, 33, 33, 1);
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-copyright {
            width: 940px;
            display: flex;
            padding: 16px 0;
            position: relative;
            box-shadow: 0px -1px 0px 0px rgba(228, 235, 243, 1);
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: center;
          }
          .home-text147 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          @media (max-width: 479px) {
            .home-content {
              width: 300px;
              margin: 0 auto;
            }
            .home-text008 {
              color: rgb(0, 0, 0);
              font-size: 32px;
            }
            .home-text015 {
              width: 300px;
              margin: 0 auto;
            }
            .home-columns {
              width: 95vw;
              margin: 0 auto;
              display: block;
            }
            .home-card {
              margin: 0 auto;
            }
            .home-card1 {
              margin: 30px auto 0 auto;
            }
            .home-card2 {
              margin: 30px auto 0 auto;
            }
            .home-features-list {
              width: 95vw;
              display: block;
            }
            .home-columns1 {
              width: 100%;
              display: block;
            }
            .home-text031 {
              width: 95%;
            }
            .home-feature {
              width: 95%;
            }
            .home-text035 {
              width: 80%;
            }
            .home-feature1 {
              width: 95%;
            }
            .home-feature2 {
              width: 95%;
            }
            .home-columns2 {
              width: 265px;
              display: block;
            }
            .home-column3 {
              margin: 30px auto 30px auto;
            }
            .home-frame-container {
              width: 400px;
            }
            .home-form-wrapper {
              width: 400px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
