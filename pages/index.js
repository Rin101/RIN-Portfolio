import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import ImStyles from '../styles/ImSection.module.css'
import projectsStyles from '../styles/Projects.module.css'

export default function Home() {

  const getAge = () => {
    const birthday = {year:2005, month:3, date:14}
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const date = now.getDate()
    const isBeforeBirthday = (month < birthday.month) || (month == birthday.month && date < birthday.date)
    let age = 17
    if (isBeforeBirthday) {
        age = (year - birthday.year) - 1
    } else {
        age = year - birthday.year
    }
    return age
}

  const ImTexts = [
    {left: {text:"I'm",style:'text1',fontStyle:'font1'}, right: {text:"RIN",style:'text2',fontStyle:'font1'}, id:0},
    {left: {text:"I'm",style:'text1',fontStyle:'font1'}, right: {text:"Creative",style:'text2',fontStyle:'font1'}, id:1},
    {left: {text:"I Love",style:'text4',fontStyle:'font1'}, right: {text:"Grunge",style:'text2',fontStyle:'font1'}, id:2},
    {left: {text:"I'm",style:'text1',fontStyle:'font1'}, right: {text:"Bilingal",style:'text2',fontStyle:'font1'}, id:3},
    {left: {text:"I'm",style:'text1',fontStyle:'font1'}, right: {text:"RIN",style:'text3',fontStyle:'font1'}, id:4},
    {left: {text:"I'm not",style:'text2',fontStyle:'font1'}, right: {text:"Kurt Cobain",style:'text2',fontStyle:'font1'}, id:5},
    {left: {text:"I play",style:'text2',fontStyle:'font1'}, right: {text:"Guitar",style:'text1',fontStyle:'font1'}, id:6},
    {left: {text:"I'm in",style:'text4',fontStyle:'font1'}, right: {text:"Tokyo",style:'text2',fontStyle:'font1'}, id:7},
    {left: {text:"I'm an",style:'text2',fontStyle:'font1'}, right: {text:"Entrepreneur",style:'text1',fontStyle:'font1'}, id: 8},
    {left: {text:"I'm",style:'text1',fontStyle:'font1'}, right: {text:getAge().toString(),style:'text1',fontStyle:'font1'}, id: 9},
  ]

  const navItemRef1 = useRef()
  const navItemRef2 = useRef()
  const topSectionRef = useRef()
  const projectsSectionRef = useRef()
  const contactSectionRef = useRef()
  
  const [index, setIndex] = useState(0)
  const [currentText, setCurrentText] = useState(ImTexts[0])
  const [navLineRight, setNavLineRight] = useState(0)
  const [navLineOpacity, setNavLineOpacity] = useState("0")
  const [column1Display, setColumn1Display] = useState('none')

  const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //     const onScroll = () => setOffset(window.pageYOffset);
  //     // clean up code
  //     window.removeEventListener('scroll', onScroll);
  //     window.addEventListener('scroll', onScroll, { passive: true });
  //     return () => window.removeEventListener('scroll', onScroll);
  // }, [])

  // useEffect(() => {
  //   if (offset <= 0) {

  //   } else if (offset < topSectionRef.current.offsetTop + (topSectionRef.current.offsetHeight/2)) {
  //     setNavLineRight(getNavLinePosition(navItemRef1.current))
  //     setNavLineOpacity("0")
  //   } else if (offset < projectsSectionRef.current.offsetTop + (projectsSectionRef.current.offsetHeight/2)) {
  //     setNavLineRight(getNavLinePosition(navItemRef1.current))
  //     setNavLineOpacity("1")
  //   } else if (offset < contactSectionRef.current.offsetTop + (contactSectionRef.current.offsetHeight/2)) {
  //     setNavLineRight(getNavLinePosition(navItemRef2.current))
  //     setNavLineOpacity("1")
  //   }
  //   console.log(offset)
  // }, [offset])

  useEffect(() => {
    const interval = setTimeout(() => {
      index !== (ImTexts.length - 1) ? setIndex(index + 1) : setIndex(0)
    }, 1000)
    return () => clearInterval(interval)
  },)

  useEffect(() => {
    setCurrentText(ImTexts[index])
  }, [index])

  const getNavLinePosition = (document) => {
    setNavLineRight(document.offsetLeft+(document.offsetWidth/2))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>RIN&apos;s Porfolio</title>
        <meta name="description" content="RIN's porfolio site" />
        <link rel="icon" href="/rin-favicon.ico" />
      </Head>

      <div className={styles.header}>
        <div style={{left:navLineRight, opacity:navLineOpacity}} id={styles.navUnderline}></div>
        <div className={styles.logo}><a href="#top"><h1>RIN</h1></a></div>
        <div className={styles.nav}>
          {/* <div className={styles.navItem} ref={navItemRef1}><a href="#projects"><p>Projects</p></a></div>
          <div className={styles.navItem} ref={navItemRef2}><a href="#contact"><p>Contact</p></a></div> */}
          <div className={styles.navItem} ref={navItemRef1} onClick={(e) => getNavLinePosition(e.currentTarget)}><a href="#projects"><p>Projects</p></a></div>
          <div className={styles.navItem} ref={navItemRef2} onClick={(e) => getNavLinePosition(e.currentTarget)}><a href="#contact"><p>Contact</p></a></div>
        </div>
        <div className={styles.rightNav}>
          <div className={styles.languageButton}><p>en/jp</p></div>
        </div>
      </div>

      <section className={styles.ImSection} id="top">
        <div className={ImStyles.textContainer}>
          <div className={`${ImStyles[currentText.left.style]} ${ImStyles.textBox} ${ImStyles.leftBox}`}><h1 className={ImStyles[currentText.left.fontStyle]}>{ currentText.left.text }</h1></div>
          <div className={`${ImStyles[currentText.right.style]} ${ImStyles.textBox} ${ImStyles.rightBox}`}><h1 className={ImStyles[currentText.right.fontStyle]}>{ currentText.right.text }</h1></div>
        </div>
      </section>

      <section className={styles.projects} id="projects">
        <div className={projectsStyles.decorativeCircle}></div>
        <div className={projectsStyles.library}>
          <div className={projectsStyles.project}>
            <a className={styles.unselectable} href='https://play.google.com/store/apps/details?id=com.rinrinrinrin.mahjongpracticeappv2'>
              <div className={projectsStyles.projectFrame} style={{fontWeight:700,fontFamily: `'Roboto', 'M PLUS Rounded 1c', 'Noto Sans JP'`}}>
                {/* <p>完全版麻雀トレーニング</p> */}
                <Image className={projectsStyles.thumbnail} style={{borderRadius:"2rem"}} width={180} height={180} src={"/images/mah-app-icon.png"} alt="icon" />
              </div>
            </a>
            <div className={projectsStyles.projectBox} style={{fontFamily: `'Roboto', 'M PLUS Rounded 1c', 'Noto Sans JP'`}}>
              <p className={projectsStyles.title}>完全版麻雀トレーニング</p>
              <p className={projectsStyles.details}>
                <span style={{fontWeight:700}}>点数計算、メンチン何待ち、条件計算などの練習問題・やり方解説が詰め込まれたアプリ!</span>
              </p>
              <div className={projectsStyles.releaseDate}>August/2022</div>
              <div className={projectsStyles.platformDetail}>
                <a href='https://play.google.com/store/apps/details?id=com.rinrinrinrin.mahjongpracticeappv2&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                  <Image className={projectsStyles.googlePlayImage} width={120} height={50} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                </a>
                <div onClick={()=>setColumn1Display('flex')} className={`${projectsStyles.readColumn} ${styles.unselectable}`}>
                  <p>read column</p>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className={projectsStyles.column} style={{display:column1Display}}>
                  <div onClick={()=>setColumn1Display('none')} className={`${projectsStyles.closeColumn} ${styles.unselectable}`}>
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <p className={projectsStyles.columnTitle}>Creating Mahjong Practice App</p>
                  <p className={projectsStyles.columnContent}>
                    The entire process was new to me. React Native, running on an iPhone,
                    creating a dev account, google adMob, and waiting for the app to get approved.
                    I got pretty much satisfied after the app was public in google play, so it&apos;s really exhausting
                    to work on all the additional features I was planning. The UI is really dull and I can&apos;t imagine
                    who would want to use the app. ¯\_(ツ)_/¯
                  </p>
                  {/* <Image width={150} height={100} src={'/images/column/column-mah1.jpeg'} />
                  <Image width={150} height={100} src={'/images/column/column-mah2.jpeg'} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contacts} id="contact">
        <div className={`${styles.keyboardRow1} ${styles.unselectable}`}>
          <div className={styles.pad}><p className={styles.padText}>1</p></div>
          <div className={styles.pad}><p className={styles.padText}>2</p></div>
          <div className={styles.pad}><p className={styles.padText}>3</p></div>
          <div className={styles.pad}><p className={styles.padText}>4</p></div>
          <div className={styles.pad}><p className={styles.padText}>5</p></div>
          <div className={styles.pad}><p className={styles.padText}>6</p></div>
          <div className={styles.pad}><p className={styles.padText}>7</p></div>
          <div className={styles.pad}><p className={styles.padText}>8</p></div>
          <div className={styles.pad}><p className={styles.padText}>9</p></div>
          <div className={styles.pad}><p className={styles.padText}>0</p></div>
          <div className={styles.pad}><p className={styles.padText}>-</p></div>
        </div>
        <div className={`${styles.keyboardRow1} ${styles.unselectable}`}>
          <div className={styles.pad}><p className={styles.padText}>Q</p></div>
          <div className={styles.pad}><p className={styles.padText}>W</p></div>
          <div className={styles.pad}><p className={styles.padText}>E</p></div>
          <div className={styles.pad}><p className={styles.padText}>R</p></div>
          <div className={styles.pad}><p className={styles.padText}>T</p></div>
          <div className={styles.pad}><p className={styles.padText}>Y</p></div>
          <div className={styles.pad}><p className={styles.padText}>U</p></div>
          <div className={styles.pad}><p className={styles.padText}>I</p></div>
          <div className={styles.pad}><p className={styles.padText}>O</p></div>
          <div className={styles.pad}><p className={styles.padText}>P</p></div>
        </div>
        <div style={{display: 'flex'}}>
          <div>
            <div className={`${styles.capsLockKey} ${styles.unselectable}`}>
              <p className={styles.shiftText1}>caps lock</p>
            </div>
            <div className={`${styles.shiftKey1} ${styles.unselectable}`}>
              <p className={styles.shiftText1}>shift</p>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className={styles.addressContainer}>
              <p className={styles.contact} style={{textAlign:'center'}}>Rintaro Kashiwabara</p>
              <div className={styles.accountContainer}>
                <p className={styles.contact}><span className={styles.contactLabel}>Email:</span>wayoftheforce101@gmail.com</p>
                <p className={styles.contact}><span className={styles.contactLabel}>Age:</span>{getAge().toString()}</p>
                <p className={styles.contact}><span className={styles.contactLabel}>Currently in:</span>Tokyo</p>
              </div>
            </div>
          </div>
          <div>
            <div className={`${styles.enterKey} ${styles.unselectable}`}>
              <p className={styles.enterKeyText}>enter</p>
              <div className={styles.enterKeyShaper}></div>
            </div>
            <div className={`${styles.shiftKey2} ${styles.unselectable}`}>
              <p className={styles.shiftText2}>shift</p>
            </div>
          </div>
        </div>
        <h2 className={styles.contactTitle}>#Contact</h2>
        {/* <div className={styles.guideToRest}>↓scroll for more (like a notepad?)or付箋</div> */}
      </section>

      <section className={styles.contactMQsm} id="contact">
        <h2 className={styles.contactTitle}>#Contact</h2>
        <div style={{display: 'flex'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className={styles.addressContainer}>
              <p className={styles.contact} style={{textAlign:'center'}}>Rintaro Kashiwabara</p>
              <div className={styles.accountContainer}>
                <div className={styles.contact}>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactContent}>wayoftheforce101@gmail.com</p>
                </div>
              </div>
              <div className={styles.infoContainer}>
                <p className={styles.info}><span className={styles.infoLabel}>born in</span>3/14/2005</p>
                <p className={styles.info}><span className={styles.infoLabel}>currently in</span>Tokyo</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.guideToRest}>↓scroll for more (like a notepad?)or付箋</div> */}
      </section>

    </div>
  )
}
