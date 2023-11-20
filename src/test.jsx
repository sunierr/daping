import MyCard from './MyCard'
import './test.css'
export default function Test({currentPage}) {
    return (
        <div className='thumbnail_container'>


            <MyCard mySrc='https://eerduosirongmei.media.xinhuamm.net/upload/news/image/2023/09/15/cd38219c478e4ce6ba551a1ab27d9ba9_s.png'
                myHeading='鄂尔多斯:标签之下,还有什么?'
                myText='2023年09月15日' 
                isFocused={currentPage===0} />
            <MyCard mySrc='https://eerduosirongmei.media.xinhuamm.net/upload/news/image/2023/09/10/ffff2c3c52b846f6b27286b98c899cef_s.jpg'
                myHeading='教育,鄂尔多斯闪亮的名片'
                myText='2023年09月10日'
                isFocused={currentPage===1} />
            <MyCard mySrc='https://eerduosirongmei.media.xinhuamm.net/upload/news/image/2023/08/28/2bb2f23ca2164661b6c3fb04f8bfd6f9_s.jpg'
                myHeading='鄂尔多斯治沙图鉴'
                myText='2023年08月27日' 
                isFocused={currentPage===2} />
            <MyCard mySrc='https://eerduosirongmei.media.xinhuamm.net/upload/news/image/2023/08/26/fc7ca819667d4264bde813eb3a4b08a9_s.jpg'
                myHeading='这就是总书记点赞的库布其'
                myText='2023年08月26日'
                isFocused={currentPage===3} />

            <MyCard
                mySrc='https://eerduosirongmei.media.xinhuamm.net/upload/news/image/2023/06/29/b23a9e21a30a4fbf96f045c917af5fe3_s.jpeg'
                myHeading='World New Energy and New Materials Conference kicks off in Ordos 2023世界新能源新材料大会在鄂尔多斯开幕'
                myText='2023年06月29日'
                isFocused={currentPage===4} />

            <MyCard
                mySrc='https://eerduosirongmei.media.xinhuamm.net/upload/news/image/2023/06/16/52fb2814907d40838dd1d967df12ee83_s.jpg'
                myHeading='鄂尔多斯:一个真正的长期主义者'
                myText='2023年06月16日'
                isFocused={currentPage===5} />

            <MyCard
                mySrc='https://eerduosirongmei.media.xinhuamm.net/upload/news/image/2023/06/19/60c6f4771e064b73825b47faa2afc65c_s.jpg'
                myHeading='你好,我是鄂尔多斯'
                myText='2023年06月19日'
                isFocused={currentPage===6} />
            <MyCard
                mySrc='https://eerduosirongmei.media.xinhuamm.net/upload/news/image/2023/05/10/555bfaeb7b164f4abf0a47dc34f2c7c3_s.jpg'
                myHeading='魔性“挖呀挖呀挖”来挖鄂尔多斯啦!看看能挖到啥?'
                myText='2023年05月10日'
                isFocused={currentPage===7} />

            <MyCard
                mySrc='https://eerduosirongmei.media.xinhuamm.net/upload/news/image/2023/03/21/0b0dbcba998344d7adeb8e216d33b507_s.jpeg'
                myHeading='晚安!鄂尔多斯!'
                myText='2023年03月22日'
                isFocused={currentPage===8} />

            <MyCard
                mySrc='https://eerduosirongmei.media.xinhuamm.net/upload/news/image/2023/03/08/04390c479a8f4a07944357ede8424c22_s.jpeg'
                myHeading='260秒高能视频!释放鄂尔多斯女性“她能量”!'
                myText='2023年03月08日'
                isFocused={currentPage===9} />

            <MyCard
                mySrc='https://eerduosirongmei.media.xinhuamm.net/upload/news/image/2023/01/21/53f0fe58d6024c08b23d3cc5e00b06a4_s.png'
                myHeading='解锁鄂尔多斯人过年的N种打开方式'
                myText='2023年01月21日'
                isFocused={currentPage===10} />
        </div>
    )
}




