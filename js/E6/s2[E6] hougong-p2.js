/**
 * =======================================
 * S2剧情：		    宫墙绿柳红砂part2
 * 文件名：			E6-hougong-p2
 * 创建日期：		2023-02-19
 * 时间线索引：		S2【E6-1B】&【E6-1C】
 * 剧情内容：       后宫线二周目B结局+二周目C结局
 * 写手：			藤原 & ito
 * 程序演绎：		栗子
 *  更新：
 * 	230219 【藤原】本剧情对应S2子文件夹【E6】宫墙绿柳红砂。
 *          后宫线分P编写，该文件为P2。
 *          (本章节的场景图片和立绘尚未完全完成，可以先用子文件夹下的绘画参考图作暂预览使用；建议设置便于检索的标记，方便之后统一替换。)
 *          具体剧情跳转关系参照工作文件夹下【E6宫墙绿柳红砂】。
 * 			如果程序员已对以上部分进行了优化，请在此条下留言已优化的部分，并且指出待优化的问题，以便后续进一步工作。
 *  230407 【栗子】p2演绎已完成：添加了场景画面切换、角色切换、音效。
 *          添加了结局和画廊弹窗。
 *          待补充：补充最后的剧情逻辑跳转。
 *    
 * =======================================
 **/


/**
*索引：
*   s = 旁白 , i = 我 , gna = 宫女a , gnb = 宫女b , gnc = 宫女c
*   tj1 = 大太监昌贵，gnd = 宫女d
**/



 monogatari.script ({
    /**
	 * ====================================
	 *【E61B-noobey】E6-1B剧情（非暴力不合作）如下
	 * ====================================
	 **/
	'E61B-noobey': [
        //以下为二周目B结局：非暴力不合作
        //场景：太监所验处阁（bg1）
        //bgm：鸟鸣白噪音
        // 先行版默认玩家名
        {'Function':{
            'Apply':function(){
            monogatari.storage({
                player:{
                name: '寄寄'
                }
            });
            return true;
            },
            'Reverse':function(){
            monogatari.storage({
                player:{
                name: ''
                }
            });
            },
        }},
        // 设置玩家名字
        {'Function':{
          'Apply':function(){
              if(monogatari.storage('player').name==''){
                  this.storage ({
                  player: {
                      name: localStorage.getItem('player_name')
                  }
                  })
              }
          },
          'Reverse':'',
        }},
        // 设置文本框效果
        {'Function':{
            'Apply': function () {
                setTextBoxCSS(textBoxE6);
            },
        
            'Reverse': function () {
                setTextBoxCSS(textBoxDefault);
            }   
        }},
        // 解锁剧情线
        {'Function':{
            'Apply':function(){
              unlock_level('level-E6-hermit');
            },
            'Reverse':function(){
              lock_level('level-E6-hermit')
            },
        }},
        'stop music',
        'show scene #000000',
        'i 索性不要再去太监所验处了。如此自欺欺人之举，有什么意义？',
        's 你决定不再每日来往于太监所。',
        //场景：宫墙柳-春（bg2-willow-spring）
        //bgm: 蝉鸣白噪音
        'show scene willow_spring with fadeIn duration 2s',
        'play sound cicada',
        's 柳树的绿无法更浓时，宫院里开始出现蝉鸣。',
        's 不知为何，今年的夏日好像格外漫长，房间中常常弥漫着湿热黏重的气息，呼吸中时时像是吞吐着105度的滚水。',
        //场景：宫墙柳-冬（bg2-willow-winter）
        //三宫女（gna gnb gnc）
        //bgm：冬天风声白噪音
        'stop sound',
        'play sound wind_winter',
        'show scene willow_winter with fadeIn duration 2s',
        's 很快柳条褪下绿色，覆上白雪。',
        's 然而今年冬日也似是无穷无尽，掀开被窝就闻到冰箱般的气味，每晚上睡觉都感觉自己像被放进冷库的冰棍。',
        'stop sound',
        'play sound stats_down',
        'i ……奇怪，这一世宫里的条件怎么比前世差如此多？',
        'i 难道我不去验处触发了蝴蝶效应，这一世大杏要完了……',
        //剧情：得知上黑榜
        's 这天你哆嗦着身子走出房门，看见宫女们面色红润，神色如常，小小的心里不禁装满了大大的问号。',
        'i 姐姐们，我不知道姐姐们原来身体素质这样好……我每天晚上都冻得发昏，可是姐姐们看上去一点儿也不冷？',
        's 宫女姐姐见状抓住你的胳膊。',
        'show character gna normal',
        'gna 哎呀，妹妹，都不知道一阵儿不见，你竟然过得这样辛苦……可心疼死我了。',
        'hide character gna',
        'show character gnc normal',
        'gnc 冻得发昏？他们是克扣了你的炭火么？',
        'hide character gnc',
        'show character gnb normal',
        'gnb 可不就是！你们没有看太监所前面贴着的黑榜吗？',
        'show character gnb think',
        'gnb 9527妹妹已经上榜好久了。入夏前就有你的名字，想必你当时也少了冰吧。',
        'i ……啊，是因为我没有去验处么？',
        'hide character gnb',
        'show character gna whisper',
        'gna 想来应该就是了。这些人竟然这样对待我们妹妹！真是苦了你了……',
        'hide character gna',
        'i （原来如此……只要我乖乖去验处，没准我还能求他们恢复我的俸禄，或许也不至于每晚都被冻醒……）',
        'i （可是……就这样认错吗？）',
        'show character gnc normal',
        'gnc 妹妹莫担心，我们给你想法子。',
        'hide character gnc',
        'show character gnb normal',
        'gnb 没错，妹妹你行我们不敢行之事，于我们实在是莫大的安慰。',
        'gnb 这点小事，我们一定想法子给你解决。',
        'hide character gnb',
        //剧情：收到物资
        //音效：敲窗声
        'show scene #000000 with fadeIn duration 3s',
        's 又过了一些日子。',
        'play sound knocking_door',
        's 某日入夜，你听到有人敲窗。',
        //场景：放着包裹的窗台（bg3-window-bag）
        'show scene bag with fadeIn duration 3s',
        's 打开窗，只见窗边放了一个黑色布袋，袋子里装的是布料、糕点、炭火，还有棉被。',
        's 你拿起袋子，闻到一阵熟悉的味道——是平日与你结伴验处的姐妹们常用的香料。',
        //场景：窗台（bg3-window-nobag）
        'show scene nobag with fadeIn',
        'i （承着这份雪中送炭的恩情，还有什么熬不过去的呢？）',
        'i （但人终归要靠自己。）',
        //场景：宫墙柳-春（bg2-willow-spring）
        'show scene #000000',
        's 每日省下来大把数砖去太监所的时间，你开始种菜种树，制冰制炭，',
        's 渐渐地，你开始在后宫过上闲云野鹤的隐居生活，还自号为"是非处居士"。',
        //剧情：菜地乘凉
        //场景：菜地（bg4-farm）
        //人物：三宫女（gna gnb gnc）
        'show scene farm with fadeIn duration 3s',
        'play sound cicada',
        's 时间流转，又是一年夏，姐妹们来你种的葡萄藤下纳凉。',
        'show character gna normal',
        'gna 妹妹，你这一日日的……何苦这般，过得像粗鄙下人？',
        'gna 种地制炭的功夫，都够你走去验处多少回啦？',
        'hide character gna',
        'i （笑）可种出来的是一粒粒是粮食，验出来的一次次却是昌贵干儿子们的赌资。',
        'i 不过是不愿意陪他们唱这出戏罢了，验处阁那个戏台子我不爱登，所以自个另搭了一个，葡萄总比太监的脸好看，是吧姐姐？',
        'show character gnb smile',
        'gnb 那可不，葡萄有红有紫，太监脸可就非青即白啦！',
        's 姐妹们一同大笑。',
        'hide character gnb',
        'show character gnc titter',
        'gnc 妹妹，那你这是非处居士的号又为何意？',
        'hide character gnc',
        'i （擦了把汗，大笑）是处乎，非处乎，是非自处也，远是非之处也。',
        //剧情：终老
        //宫墙柳-春（bg2-willow-spring）与宫墙柳-冬（bg2-willow-winter）交错淡入淡出，作为时间流逝效果
        'show scene #000000',
        'centered',
        'show scene willow_winter with fadeIn duration 2s',
        's 就这样，从秋到冬，',
        'show scene willow_spring with fadeIn duration 2s',
        's 又从春到夏，',
        's 这般神仙日子活到九十九，熬过了老不死的性无能，也熬过了帝国的命数。',
        'play sound notification',
        'show message Ending-fblbhz',
        'end',
   
        /*
            藤原：此处未设置节点跳转；需要之后补。
            此处自动跳转到本体线核酸监督【不】冲塔剧情（所有选项开放）（需要在核酸线的开头定义环境变量？）
            核酸线还没有转写，等核酸线设完再设置跳转节点
        */

],
//结束【E61B】E6-1B后宫线二周目B结局剧情

 /**
	 * ====================================
	 *【E61C】E6-1C剧情（后宫线二周目C结局）如下
	 * ====================================
	 **/
    
     'E61C-protest': [
        // 先行版默认玩家名
        {'Function':{
            'Apply':function(){
            monogatari.storage({
                player:{
                name: '寄寄'
                }
            });
            return true;
            },
            'Reverse':function(){
            monogatari.storage({
                player:{
                name: ''
                }
            });
            },
        }},
        //设置玩家名字
        {'Function':{
            'Apply':function(){
                if(monogatari.storage('player').name==''){
                    this.storage ({
                    player: {
                        name: localStorage.getItem('player_name')
                    }
                    })
                }
            },
            'Reverse':'',
        }},
        // 设置文本框效果
        {'Function':{
            'Apply': function () {
                setTextBoxCSS(textBoxE6);
            },
        
            'Reverse': function () {
                setTextBoxCSS(textBoxDefault);
            }   
        }},
        // 解锁剧情线
        {'Function':{
            'Apply':function(){
              unlock_level('level-E6-fire');
            },
            'Reverse':function(){
              lock_level('level-E6-fire')
            },
        }},
        //以下为二周目C结局剧情：组织抗议
        'stop music',
        'show scene #000000',
        's 你决定借打点之名拜访姐妹们，试探她们对于验处的态度。',
        //剧情：初步议事
        //场景：宫院内部-菜地（bg4-farm）
        //人物： 三宫女（gna gnb gnc）
        'play sound bird',
        'show scene farm with fadeIn duration 3s',
        's 这日午膳过后，你与众姐妹聚在一处宫苑里。',
        'show character gna normal',
        'i 姐姐院里的桃花开得真好，昨日可有采露煮茶？',
        'gna 我倒是想，可你知道，昨日适逢验处，我这儿离验处阁又是最远……',
        'gna 每回验处，来去都累得不行，哪来闲情煮茶呀。',
        'i 唉……这倒是，验处费时费力，来去和列队都要时间，',
        'i 有几回日头大了，我看有些底子差的姐妹站得脸色都白了。',
        'i 我底子不算差，倒是受得住，但偏偏看不得太监那张脸，心里堵得慌。',
        'hide character gna',
        'show character gnb normal',
        'gnb 可不是！个个争当昌贵的狗，背地里赌钱斗鸡样样在行。',
        'hide character gnb',
        'show character gna normal',
        'gna 真的？妹妹你从哪知道的消息……',
        'hide character gna',
        'show character gnb normal',
        'gnb 小德子有回使唤手下人替他往外面赌场存钱，被一个姐妹听到的，不会有假。',
        'hide character gnb',
        'show character gnc normal',
        'gnc 拿的怕就是验处得的赏钱吧，自打验处以来，小德子的腰杆都比以前直。',
        'hide character gnc',
        'show character gnb normal',
        'gnb 昌贵最宠的干儿子，分到的验处名额最多也不奇怪……',
        'gnb 这宫里怕只有他们从验处中得好处，越验地位越高，成了主子。',
        'hide character gnb',
        'show character gnc normal',
        'gnc （拍桌）想到小德子那张不阴不阳的脸我就难受！',
        'i 谁不是呢姐姐！真想当面问问他摆的什么架子！',
        'hide character gnc',
        'show character gna normal',
        'gna 妹妹们冷静……我们这些不承恩宠的宫妃，过日子花的用的全凭太监们一句话，可不能撕破脸。',
        'hide character gna',
        'show character gnc normal',
        'gnc 姐姐说得是没错，但是就任他们如此作威作福，我也实在不能甘心。',
        'i 仅凭我们确是螳臂当车，但后宫姐妹不止三千，太监才区区几百……',
        'hide character gnc',
        'show character gnb normal',
        'gnb 你是说——',
        'hide character gnb',
        'show character gnc titter',
        'gnc 对呀！后宫姐妹苦验处久矣，何不拉上她们一道？',
        'hide character gnc',
        'show character gnb think',
        'gnb 可我相熟的不过你们三人，旁人也信不过，若是被出卖了如何是好？',
        'i 姐姐莫忧心，我有个法子，不必拉上许多人，也不必现身——',
        'hide character gnb',
        'show character gna normal',
        'gna 等等，妹妹们，这就决意要非行事不可了吗？',
        'i 姐姐，不是我们决意，我怕太监们将会逼得我们不得不行事。',
        'gna 此话怎讲？',
        'i 唉，但愿是我杞人忧天……今日听姐姐们说太监赌钱之事，我总是不安。',
        'i 他们把验处当作谋财之手段，处与非处全靠劳什子蛊虫，而蛊虫又全出自他们之手，',
        'i 会不会……为了验得更多——造出非处呢？',
        'hide character gna',
        'show character gnc normal',
        'gnc （站起身）他们敢！这可是欺君大罪，昌贵那颗脑袋怎么敢担！',
        'gnc 况且后宫连男根都没有，这谎撒得不可笑么？',
        'hide character gnc',
        'i 但愿他不敢，可要是他敢，我们是决计不能再忍下去的。',
        'i 七日一回也许还勉强可受，可若是两日一回，一日一回，一日几回呢？',
        'i 姐姐们院里的桃花，案上的古籍，手中的剑法，难道都要因为验处荒废了么？',
        'show character gnb normal',
        'gnb ……我是决计无法忍那般日子的……',
        'hide character gnb',
        'show character gna normal',
        'gna 话虽如此，可毕竟还没到那般境地……',
        'i 我也希望那般境地永不会到，但若是到了，也是我们的时机。',
        'i ……姐姐，若是太监们造出非处，你会同我们一道么？',
        'show character gna whisper with fadeIn',
        'gna ……我虽小心，但也不是逆来顺受的奴才，那般欺压是忍不下的。',
        'i 是了，其他姐妹想必也不乏姐姐这般想法，所以届时便是群情激愤，一呼百应之机。',
        'hide character gna',
        'show character gnc normal',
        'gnc 妹妹有法子？',
        'i 宫里姐妹虽住在四面八方，但验处所门前那条宫道却是必经之路。',
        'hide character gnc',
        'show character gnb think',
        'gnb 不错，那条路上的砖都快印我脑袋里了。',
        'i 若在造出非处，群情激愤之际，验处路上见到怒骂他们的话呢？',
        'show character gnb normal',
        'gnb 这字还得用朱笔写，让这青砖染血，我略懂书法文墨，让我来吧。',
        'hide character gnb',
        'show character gnc normal',
        'gnc 好！妹妹，你可想好一呼百应之后如何？',
        'i 姐姐有何计策？',
        'show character gnc titter',
        'gnc 我做梦都想做的事便是一把火烧了验处所的蛊虫，若能一呼百应，我必第一个放这把火。',
        'gnc 我入宫以后，虽不再能舞刀弄枪，但马步拳法也未曾荒废，正适合做跟太监们正面相对的先锋。', 
        'hide character gnc',
        'show character gna smile',
        'gna 几位妹妹之勇，甚于我平生所见男儿……我虽文武不通，但会做几件衣裳，',
        'gna 若是往宫砖上贴纸，我看还需在夜里，最好穿夜行衣，做夜行衣这差事便归我吧。',
        'i 好，好，好！能认识几位姐姐是我入宫最大的幸事！',
        'i 若想成事，可能还需要多点人手，我来结识其他姐妹，择可信任之人一同谋事。',
        'show character gna normal',
        'gna 妹妹的语气，总像笃定太监们会造出非处一般？',
        'i （当然笃定，毕竟活过一辈子……）',
        'i （笑）许是我相信太阳底下无新事，该发生的必然会来吧。',
        
        //剧情：筹备->验处频率提高
        //场景：宫墙柳-春（bg2-willow-spring）->宫墙柳-冬（bg2-willow-winter）
        //人物： 宫女d
        'play sound bird',
        'show scene willow_spring with fadeIn duration 3s',
        's 那日过后，你们各自忙于结交、制衣、拟文、习武。',
        'show scene willow_winter with fadeIn duration 3s',
        's 当验处周期即将缩短到两日一次时，你已经笼络了二十余名姐妹。',
        's 她们分别加入你们四个人的分工。时机日渐成熟，只欠那股一定会来的东风。',
        'show character tj1 normal',
        's 昌贵最终还是如前世一般趾高气昂地出现了，宣布了你们的命运。',
        'hide character tj1',
        's 可是这一回，你要这命握在自己手中。',
        'show character gnd cry',
        'gnd 只是，要将我打入冷宫的决议，恐怕难以改变……',
        'i （握住她的手，低声）姐姐，我们会去救你的，一定会。',
        'show character gnd scared',
        's 她眼下仍挂着泪，但还是在你坚定的眼神中怔愣地点了点头。',

        //剧情：夜晚贴字
        //人物： 三宫女
        //【CG1】夜行衣宫妃在宫墙上贴白纸朱字
        'show scene #000000',
        's 是夜，你们穿上夜行衣假装打更人，在宫墙贴上已经准备好的白底朱字的纸张，',
        's 纸上字字所书，皆是你们对蛊虫验处的质问，',
        'centered',
        'show image night_posters with fadeIn duration 3s',
        'centered',
        'gallery unlock E6_cg_night_posters',
        'play sound notification',
        'show message E6_cgunlock_night_posters',
        's “既无男根 何来非处”',
        's “是处非处 赌鬼不知”',
        's 数过的八百三十四块青砖上贴满密密麻麻的朱字，',
        'show character gnc innocent',
        'gnc 痛快，真痛快啊！',
        'hide character gnc',
        'show character gnb smile',
        'gnb 这些话我可忍了太久，明日青天白日，定要将它们晒尽！',
        'hide character gnb',
        'show character gna whisper',
        'gna 本以为这辈子只有凋敝的命，算不到还能这般活得像个人。',
        's 你忽然感到心头浓厚的郁愤一下被划破，终于化解开来。',
        'i 姐姐莫哭，朱字定能破了这青砖垒起的宫墙。',

        //剧情：火烧太监所
        //人物： 三宫女（gna gnb gnc）+gnd,大太监（tj1），宫女群像
        //藤原：在CG之前是否需要背景？还是直接黑屏？
        'show scene #000000',
        's 次日，姐妹们在数砖去太监所的路上看到这些朱字。',
        's “是啊，后宫里连有根的男人都没有，那位姐妹是如何能失清白？”',
        's “你们看这张纸上，说小德子在宫外赌坊被砍手的事……”',
        's “他们居然拿着验处攒下的钱过好日子，是处非处又全靠他们一张嘴……不出现非处才怪。”',
        's “我们入宫不是为了给这些奴才当谋财器物的！”',
        's “不公道大行其是，谁敢说下一个被扣上非处的是谁？”',
        's “时时刻刻要提心吊胆，无休无止……”',
        's “没准之后会更频繁，两日一回也满足不了他们的胃口！”',
        's “没有王法……竟然如此明目张胆欺君么！”',
        's 积压已久的不满被挑明，晒在了煌煌天日之下。',
        //【CG2】宫妃起义
        'centered',
        'show image riot with fadeIn duration 3s',
        'centered',
        'gallery unlock E6_cg_riot',
        'play sound notification',
        'show message E6_cgunlock_riot',
        'show character gnc normal',
        'gnc 这般窝囊的日子我不要过一辈子，这劳什子蛊虫不如烧了去！',
        'hide character gnc',
        'i 烧蛊虫！',
        's 一同谋事的姐妹们跟着你喊："烧蛊虫！"',
        'show scene #000000',
        's 其他姐妹们纷纷叩砖而起，在你们的带领下涌入太监所。',
        's 太监们惊慌地看着你们愤怒的脸。',
        //【CG3】火烧太监所
        'centered',
        'show image set_fire with fadeIn duration 3s',
        'centered',
        'gallery unlock E6_cg_set_fire',
        'play sound notification',
        'show message E6_cgunlock_set_fire',
        'tj2 做——做甚——',
        'show character gnb smile',
        'gnb 呦，今日公公终于抬眼看人啦？',
        'hide character gnb',
        'show character gna smile',
        'gna 确实是头一回见着各位完全睁开的眼睛哩！',
        'hide character gna',
        'show character gnc normal',
        'gnc （擒拿住领头的验处公公）蛊虫在哪？',
        'hide character gnc',
        'show character tj1 normal',
        'tj1 哎呦，你们——你们是反了天了。',
        'hide character tj1',
        'show character gnb smile',
        'gnb 大胆奴才，你竟敢说自己是天么！',
        'hide character gnb',
        'i 炼蛊的密室在哪里？坦白从宽，抗拒从严！',
        'show character tj1 normal',
        'tj1 放肆，你们这群贼子，这事闹到朝上，十个脑袋也不够你们掉的——',
        'hide character tj1',
        'show character tj3 normal',
        'tj3 密室在这边，随我来。',
        'hide character tj3',
        'show character gna normal',
        'gna ？？？',
        'hide character gna',
        'show character gnb normal',
        'gnb ？？？',
        'hide character gnb',
        'show character gnc normal',
        'gnc ？？？',
        'hide character gnc',
        'i （怎么回事？这小太监临阵倒戈了？）',
        'show character tj1 normal',
        'tj1 ——你！',
        'tj1 你这个吃里扒外的东西！你竟敢和这群贱人私通，里应外合！',
        'i 咦！郑公公，我原以为验处阁诸位是如胶似漆，没曾想你们竟貌合心离嘛？',
        'hide character tj1',
        'show character gnc titter',
        'gnc 姐妹们跟上！来个人按住昌贵，我们跟着小太监去把那密室端了！',
        'hide character gnc',
        'show character gnb think',
        'gnb 慢着！没准儿这他是为了保住昌贵，要调虎离山，把我们引到别处好让昌贵趁机开溜！',
        'hide character gnb',
        'show character gnc normal',
        'gnc ……好险，差点着了他的道！',
        'hide character gnc',
        'show character tj3 normal',
        'tj3 什么？我保着他做甚，好叫我们验处官以后继续喝西北风去呀？',
        'hide character tj3',
        's 四周传来一片应合声。',
        's “狗昌贵还钱！”',
        's “还我血汗钱！”',
        'i 难道昌贵的干儿子不是一个个中饱私囊，整日在外逍遥快活吗？',
        'show character tj3 normal',
        'tj3 噢（白眼），验处的确是肥缺啊，不过你看看那钱都进了谁的荷包？都叫昌贵和干儿子们拿去了！',
        'tj3 我们每天饮风餐露，已经修炼得仙风道骨了，那的确是将要羽化登仙，前往逍遥之境啦！',
        'hide character tj3',
        'show character tj1 normal',
        'tj1 公家人自然是要有苦其心志、劳其筋骨、饿其体肤的意志，才能担得起维持秩序的重任哩……是不是，小德子？',
        'hide character tj1',
        'show character gna smile',
        'gna 郑公公，小德子已经跑远咯。',
        'hide character gna',
        'show character tj3 normal',
        'tj3 不愧是外勤出得多，到了溜的时候跑得比耗子还利索。',
        'tj3 我们老实本分的验处官呢，一开始七天验一次尚还耐得住，后来变成两天验一次，一天一次，一天两次，',
        'tj3 辛劳的时间一日赛一日多，忙得连饭也吃不上了。哈哈，正好吃饭的钱也没有！',
        'tj3 我们一个个终日憔悴操劳，可是铜板却一个也没有涨！',
        'hide character tj3',
        'show character gnc normal',
        'gnc 原来不只是我们宫女苦验处久矣！',
        'hide character gnc',
        's 四周的呼喊愈发高涨。',
        's “还我血汗钱！”',
        's “还我血汗钱！”',
        'show character tj3 normal',
        'tj3 同侪们哟，这验处阁是待不下去了，哪怕直接上街要饭也赛过在这发烂发臭！我们走，去密室！',
        'hide character tj3',
        'show character gnc titter',
        'gnc （从后厨拿来点燃的柴分发给你们）今日这火，为我们自己而放，为所有苦于验处的人而放！',
        'hide character gnc',
        's “烧蛊虫！烧蛊虫！”',
        's 宫女和太监们的声音混合在一起，',
        's 蛊虫们被一烧而尽。',
        's 随后你们冲入冷宫，昨日被判为非处的宫女热泪涟涟。',
        'show character gnd cry',
        'i 姐姐莫怕，我们同你一道。',
        'hide character gnd',
        's 你们一齐在冷宫住下。',

        //剧情：前朝撤出太监
        //场景：宫墙柳-冬（bg2-willow-winter）
        'show scene willow_winter with fadeIn duration 3s',
        's 次日，代皇帝理政的前朝得知此事。',
        's 他们并不关心你们与太监的斗争，',
        's 唯独在乎钦天监所奏，后宫走水乃不祥之兆。',
        's 太监所作为走水处被取缔，大臣们唯恐这不详灭得不够彻底，',
        's 于是太监也被撤出了后宫。',
        's 而后宫皆为冷宫有损皇帝声誉，毕竟相当于直言后宫形同虚设。',
        's 在不言的默契下，冷宫的姐妹被你们救出。',
        //剧情：后宫自治
        //场景：宫墙柳树下，三宫妃自治立绘+其他的宫妃模糊剪影群像（bg5）
        'show scene willow_spring with fadeIn duration 3s',
        's 连没根的男人也从后宫中消失之后，你们便开始了女官自治。',
        'show character gna after',
        's 你张罗姐妹们读书写诗，',
        'hide character gna',
        'show character gnb after',
        's 耕种开荒，',
        'hide character gnb',
        'show character gnc after',
        's 练兵习武。',
        'show scene farm with fadeIn duration 3s',
        'play sound bird',
        's 这日用过膳后，你们众姐妹又聚在一处。',
        'show character gna after',
        'i 姐姐院里的桃花开得真好，昨日可有采露煮茶?',
        'gna 上回诗会的集子尚没编完，哪里顾得上煮茶。',
        'hide character gna',
        'show character gnb after',
        'gnb 天天念着桃花，你莫不是馋桃花糕了吧！',
        'hide character gnb',
        'show character gna after',
        'gna 说不准呢！妹妹上回写的诗可是句句不离吃食。',
        'i 大俗大雅，大俗大雅，韵对了就行，嘿嘿。',
        'hide character gna',
        'show character gnb after',
        'gnb 你最近写诗确有长进，晚上来我这吃顿好的。',
        'hide character gnb',
        'show character gnc after',
        'gnc 你又在哪开了块地？',
        'hide character gnc',
        'show character gnb after',
        'gnb 没多大，就原来太监所后面那块园子。',
        'hide character gnb',
        'show character gnc after',
        'gnc 呦，你倒是不嫌晦气。',
        'i 园子哪儿有晦气不晦气之说！',
        'i 晦气的都不在了，地又有何错？',
        'gnc 哇，学文学出长进啦？明日我来查查你的拳法如何？',
        'i ……啊，姐姐们，想起筹算的功课还没检查，我先行告辞了！',
        'hide character gnc',
        'show scene #000000',
        

        //剧情：抢回出宫权
        //场景：宫墙柳-春（bg2-willow-spring）与宫墙柳-冬（bg2-willow-winter）交错淡入淡出，作为时间流逝效果
        'centered',
        'show scene willow_winter with fadeIn duration 2.5s',
        'centered',
        'show scene willow_spring with fadeIn duration 2.5s',
        'centered',
        'show scene willow_winter with fadeIn duration 2.5s',
        'centered',
        's 又过了五年，老皇帝终于薨逝。',
        's 有大臣提起你们当年纵火之事，意在要你们殉葬。',
        's 你们提剑的提剑，拿书的拿书，闯上前朝，',
        's 文武双下，舌战群儒，剑指四方，',
        's 在朝还有前来吊唁的邻国使臣，强迫殉葬之事被捅破，',
        's 若是依旧执行难免有损帝国体面，你们因而抢回出宫养老之权。',

        //剧情：创办女子书院
        //场景：读书区和室外习武区，老年版三宫妃立绘+年轻的女学生们（bg6）
        'show scene #000000',
        's ……',
        'show scene school with fadeIn duration 3s',
        's 出宫后，早在被家族送进宫时就已经被放弃的你们无家可归，',
        's 于是你们便一起买下一个院子，开办女子书院，教女子读书习武，',
        's 至你百岁死时，它的影响已经非常深远。',
        'play sound notification',
        'show message Ending-E6true',
        'centered',
        'play music good_ending',
        'show scene #000000',
        'centered',
        // TRUE ENDING制作名单
        'centered <p>制作名单</p><p>PRODUCER: レイワジダイ株式会社</p><p>STORY: 千葉ハルキ, 淀川ニンニク, おおさくゆめ</p><p>GAME ENGINE: Monogatari, Apache Cordova</p><p>PROGRAM: 2号機, 千野キノ, 鳥山 湖辺斎, 太作夢</p><p>GRAPHICS: Kohensai Toriyama, 岡田茂のAI, にんにく</p>',
        'centered <p>MUSIC & SFX: 渡辺徹, ガレージバンド, Miho Araki, Kino Chino</p><p>TESTING: オカダの友, ヨウイチ, Haruki Chiba, 東野澪子</p><p>PROMOTION: 津門ゆうじ</p><p>EATING WATERMELONS: 無敵ドラゴン戦神, ユリシス</p><p>SPECIAL THANKS: 佐藤アオイ, savage</p>',
        'centered',
        'centered 更多离奇诡谲的平行世界，',
        'show scene E1_bus with fadeIn duration 3s',
        'centered',
        'show scene #000000',
        'centered 更加险象环生的生存挑战，',
        'show scene E3_factory with fadeIn duration 3s',
        'centered',
        'show scene #000000',
        'centered 尽在录奇志异的東京求生记！',
        'centered <p>感谢您的游玩！</p><p>東京求生记·完整版及dlc正在同步制作中，敬请期待！</p>',
        'centered',
        'end',
        /*
        藤原：此处未设置节点跳转；需要之后补。
        此处自动跳转到本体线核酸监督【不】冲塔剧情（所有选项开放）（需要在核酸线的开头定义环境变量？）
        核酸线还没有转写，等核酸线设完再设置跳转节点
        */
        
    ],

})
