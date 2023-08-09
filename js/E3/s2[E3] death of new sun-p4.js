/**
 * =======================================
 * S2剧情：		    新日之暗（part3）
 * 文件名：			death of new sun p3
 * 创建日期：		2023-02-19
 * 时间线索引：		【2-3】&【2-3-1】&【2-3-2】&【2-3-3】&【2-3-4】&【2-3-5】&【2-3-6】&【2-3-7】&【2-3-8】&【BE你的功绩无人知晓】&【背叛者的徽章】
 * 写手：			虚渊
 * 程序演绎：		栗子
 * 更新：
 * 20230728        【栗子】转写完成，等待剧情树完成后需补充所有剧情线解锁相关
 * =======================================
 */

/**
*索引：
*   i = 我 ， s = 旁白 ， pm = 屏幕 ， zg = 长官 
*   a = 冈田 ， h = 护卫队 ， gw = 怪物 ， gr = 龙套工人
*   la = 龙套工人a（藤本） ， lb = 龙套工人b（藤原），lc = 龙套工人c， lr = 路人， db = 大伯
*/

monogatari.script ({
    /**
	 * ====================================
	 *【2-3】S2-3
	 * ====================================
	 **/
    'E3-S2-3':[
		{'Function':{
            'Apply': function () {
            setTextBoxCSS(textBoxE3);
            },
    
            'Reverse': function () {
            setTextBoxCSS(textBoxDefault);
            }   
        }},
		//此前剧情中被抓过解锁选项【E3-S1-3】
		'show scene E3_dorm',
		's 与其选择一个不确定的未来，不如用这不确定的东西交换些什么。',
		's 你暗自思考了一下，然后做出了决定。',
		'i 我想走，但咱们还是等今天下工再跑吧！晚上不容易引人注目。',
		'show character a happy',
		'a 好，那晚上宿舍见！',
		'centered',
		//此处镜头切换黑屏,淡入淡出,切到走廊背景
		//ito:因为这里作为同伴的主角有点异常,所以如果冈田还是原来的反应的话就会有点奇怪,这里稍微调整一下冈田的对话。
		'show scene #000000',
		's ……',
		'show scene corridor_night with fadeIn duration 3s',
		's 夜色降临的时候，你们回到宿舍，换好最厚的衣服，然后背上燃料和食物准备离开。',
		'show character a bored',
		's 冈田回头看了看宿舍。',
		'a 嗯……走吧。他好像不来了，就咱们两个。',
		'hide character a',
		'play music E3_peaceful_industry with loop fade 3 volume 50',
		'play sound footsteps',
		'show scene factory with fadeIn duration 3s',
		's 时间一分一秒地流逝，你们听到夜班的工人起床穿过宿舍之间的街道，走向远处。夜已经很深，但你们毫无睡意。',
		'i 差不多了。',
		'show character a bored',
		'a 我知道一条小路。',
		'hide character a',
		//切换成工厂背景,两侧逐渐被黑色挡住,做出巷道里往外看的感觉
		//待补充
		'play sound footsteps',
		's 道路两侧不加装饰的墙体表面上凸出黄铜的管道，闸门喷出蒸汽，在这些高温水汽的轰鸣中，你感受到了新日的脉动。',
		's 此刻不知是否是心理作用，你觉得脉搏有些急促，仿佛有什么大事要发生。',
		'show character a bored',
		'a 就是这里。',
		'i 外面就是冰原吗？',
		'a 对的，我之前瞎溜达的时候发现的地方。附近都是自动机器，没什么人，咱们剪开这些铁丝网就能出去。',
		'i 亏你能发现这种地方，快点吧!',
		'a 你帮我放风。',
		'i 好。', 
		'hide character a',
		's ……',
		'stop music E3_peaceful_industry with fade 3',
		'show character a worried',
		'a 我去好难剪啊……',
		'a 这么冷我还出汗了……',
		'a ……诶，你怎么不说话？',
		'a {{player.name}}？',
		'play sound click_button',
		'hide character a',
		's 冰冷的枪械抵在了冈田的背后，同时一个冷漠的声音响起。',
		//插入护卫队立绘
		//ito:一般工厂不会因为这事发奖金的,顶多就给点精神奖励吧 233
		'show character h shooting',
		'h 抱头，蹲下来。',
		's 冈田明显一愣，但还是抱着头慢慢蹲下。',
		'h 公然违反通知，违抗命令，破坏工厂设施。',
		'show character h chat',
		'h 跟我们走一趟吧。',
		'hide character h',
		'show character a worried',
		'a 可……可是……还有……',
		'hide character a',
		'show character h chat',
		'h 可是什么可是，跟我们走!',
		//此处镜头切换黑屏,淡入淡出,切换到工厂背景
		'centered',
		'show scene #000000',
		'centered',
		'play sound footsteps',
		'show scene factory with fadeIn duration 3s',
		'show character h chat',
		'h 还是你理解我们的工作啊。做得好。现在能源供应这么紧张，老有人不干活还想着钻空子，一有机会就溜，真不让人省心。',
		'h 就知道溜，都跑了新日怎么办？这座城市怎么办？一点大局观也没有!',
		'h 现在我们光杀扭曲已经累死人了，这帮兔崽子还成天跑跑跑，真能添堵！',
		'i 我想问一下，他们……会怎样？',
		'h 怎样？也不会怎样，就开除呗。他们想跑，那不正好就成全他们了呗。',
		'h 你看他们，好容易挤进厂子来，这一跑不就回到解放前了吗，多不值当？也算是给那帮想跑的家伙们杀鸡儆猴了。',
		'i ……',
		'h 后面没你什么事了，走吧。我还得去巡逻。真累人。',
		'i 等等，大哥啊，你们护卫队，任务可真重。要是还需要人手……',
		'h 哦嚯，你也想当护卫，是吧？为这个事卖的工友，嘿，我算看出来了。',
		'i ……我需要钱救急，听说护卫的能源发得多些……',
		'h 当然。护卫这种重活累活，不是缺能源谁要干？我懂的。',
		'h 近来北片新扩了厂区，那边还比较缺人，我帮你去北区问问好了。要是事成了，你分哥点油膏抽抽就好，怎样?',
		'i 太好了！要是真成那一定的。',
		'hide character h',
		's ……',
		//跳转【2-3-1】护卫队
		'jump E3-S2-3-1',
    ],

    /**
	 * ====================================
	 *【2-3-1】S2-3-1
	 * ====================================
	 **/
    'E3-S2-3-1':[
		{'Function':{
            'Apply': function () {
            setTextBoxCSS(textBoxE3);
            },
    
            'Reverse': function () {
            setTextBoxCSS(textBoxDefault);
            }   
        }},
		'show scene wall with fadeIn duration 3s',
		'play music E3_peaceful_industry with loop fade 3 volume 50',
		's 于是，基于说不出的理由，你自愿调去了北区，与认识的所有工友断了联系，对父母则称自己升了职，拿到了更高的工资。',
		's 然后，你蒙上了面孔，带上了过滤噪声的耳机，成为了一名北区护卫队成员。',
		's 新建成的北区四周都是钢铁铸成的高墙，似乎连新日耀眼的光芒都难以逾越，更别说未经许可逃窜的人员。但是为了维护生产秩序，巡逻仍是必须的。',
		's 你每天的工作很简单，盯着工人吃完早饭，把他们押到各自的工位上。自从有人逃跑后，为了防止工人们再联合起来想出什么计划，每天工位的安排都是随机的。',
		's 对这些逃跑过的工人而言，工作就没那么轻松了，他们每一小时五十分钟才有一次短暂的休息。',
		's 除了防守更加严密以外，似乎一切都没有改变。',
		's 但是身为护卫队成员，你知道很多工人不了解的消息。',
		's 厂里的情况正变得严峻，有一个宿舍集体扭曲，杀光了周围宿舍的人。',
		's 但是这件事自然是不能让工人们知道的。一旦走漏风声，他们肯定又是一番添油加醋，不由分说地闹起来，闹大了还会影响新日的能源供应。',
		's 新日是城市的能源命脉，一旦出了什么纰漏，整个城市会一起完蛋。',
		's 为了城市的能源供应不受影响，那些会引起恐慌的消息是不能传开的。为此，你们护卫队只有严防死守，封锁消息，然后继续等待上面的命令。',
		's 厂里不再允许外面的人进来，就连食物都是运到门口，然后护卫队再自己搬进去。',
		's 仿佛全世界都在扭曲，而你们能做的只有击杀与封锁。',
		's 昨天南边的厂区还有人跑出去了，护卫队追了一公里，最终遗憾失败。',
		's 好在总有人想来大名鼎鼎的新日工厂谋得一个小小的职位，新的工人总是无穷无尽。',
		'stop music E3_peaceful_industry with fade 3',
		's ……',
		//跳转【2-3-2】不满
		'jump E3-S2-3-2',
    ],


    /**
	 * ====================================
	 *【2-3-2】S2-3-2
	 * ====================================
	 **/
    'E3-S2-3-2':[
		{'Function':{
            'Apply': function () {
            setTextBoxCSS(textBoxE3);
            },
    
            'Reverse': function () {
            setTextBoxCSS(textBoxDefault);
            }   
        }},
		//ito：更改人称并调整了部分文本。hb=护卫B
		'show scene factory with fadeIn duration 3s',
		'play sound factory_bell',
		's 今天一早，刚刚起床的你就被叫走，赶往北区的食堂。',
		'show character h chat',
		'ha 这边！',
		'hide character h',
		'i （怎么回事啊……我刚刚值完夜班……）',
		'play music E3_steampunk_cult with loop fade 3 volume 50',
		'show character lb whisper',
		'lb 杀人啦！救命啊！',
		'hide character lb',
		'show character lc fighting',
		'lc 啊啊啊啊啊！',
		'hb 我打死你！',
		'lc 啊啊啊啊啊啊啊啊啊！',
		'hide character lc',
		'i 怎么回事怎么回事！',
		's 你们提着齿轮枪冲入食堂的人群，看到你们手里的武器，围观的工人立刻让出了道路。',
		'show character lc loaded',
		'lc 狗护卫要杀人了！他下死手打的我！',
		'hide character lc',
		's 被指控打人的是一名护卫队成员。',
		'hb ***你说什么？嘴巴放干净点！是不是你先没排队，啊？！',
		'show character lb whisper',
		'lb 排队，排**的队！就这么点时间根本就不够吃饭！我们已经有两天饭都还没排上就被叫去上工了！',
		'hide character lb',
		'show character lc loaded',
		'lc 照这么下去人还没累死在工位上，就先饿死在食堂里了！',
		'lc 我们要吃饭，我们要休息！',
		'hide character lc',
		'gr 就是，就是！',
		's 饿红了眼的工人纷纷附和起来。',
		'play sound knock_metal',
		's 砰！',
		's 你用齿轮枪朝空中鸣枪，人群一下鸦雀无声。',
		'stop music E3_steampunk_cult with fade 3',
		's 你们随即开始着手驱散人群，将闹事者押送去关了禁闭。',
		's ……',
		'play sound factory_bell',
		's 当天晚上，你和其他队员们被临时聚集在一起，队长开始宣读上面传达下来的消息。',
		'show character h chat',
		'hdz 今天的事情上面很生气，说咱们护卫都是吃干饭的，连工人闹点事都处置不好。',
		'hdz 上头下了死命令，以后不能给工人有闹起来的机会，不然滚蛋的就不是他们，而是咱们了，明白吗？',
		's 空气中弥漫着不满的氛围，你听到其他队员把牙龈咬得咯吱作响。',
		'i （是他们自己要闹，干嘛把锅甩到我们头上啊？）',
		's 队长的目光在你们脸上扫过，最终定在你的面前。',
		'hdz 新来的，早上你表现得还可以，对闹事的人，就应该给一个下马威。大家以后都向这小兄弟看齐。',
		'hide character h',
		'i （……但是施压真的能让工人就此不闹了吗？）',
		//选择对他们好一点跳转【2-3-3】良心未泯
		//选择工人就当像工人一样工作跳转【2-3-4】工人就当像工人一样工作
		'play sound choices',
		{'Choice':{
			'Dialog': 's 你怎么想呢？',
			'no': {
				'Text': '工人就应该像工人一样工作',
				'Do': 'jump E3-S2-3-4',
				//跳转到【2-3-3】S2-3-4
			},
			'yes': {
				'Text': '工人也是人',
				'Do': 'jump E3-S2-3-3',
				//跳转到【2-3-4】S2-3-3
			},
		}},
	],


    /**
	 * ====================================
	 *【2-3-3】S2-3-3
	 * ====================================
	 **/
    'E3-S2-3-3':[
		{'Function':{
            'Apply': function () {
            setTextBoxCSS(textBoxE3);
            },
    
            'Reverse': function () {
            setTextBoxCSS(textBoxDefault);
            }   
        }},
		//ito：调整了部分文本。
		'i 队长，恕我直言，我觉得光靠压，是压不住的。',
		'i 老祖宗说得好！堵不如疏。工人也是人。我们身为秩序的维护者，更应当知道这个道理。',
		'i 要是劳动环境不改善，工人兄弟的怨气只会越来越大，越是堵，它一旦爆发，就好似洪水决口，拦也拦不住——',
		'show character h chat',
		'hdz 你说决什么口？',
		'i 呃。就是说，要是他们闹真格的，厂子上万号人造起反来，只怕我们寡不敌众，倒不如我们平时多给工人兄弟行些方便——',
		'hdz 你说得倒简单。要是上边视察，看见我们和工人谈笑风生，觉得我们在浑水摸鱼，那咱们都滚蛋算了。',
		'i ……那要不这样，平时无论他们的需求我们能不能解决，还是尽量做个耐心平和的样子，搞好关系，这样至少他们不会太找我们麻烦。',
		'i 等到领导要来视察的时候，我们再从严执法，怎么样？',
		's 队长盯着你看了很久。',
		'i （救命，我说错什么了，我认错还不行吗？）',
		'hdz ……好，那就先这么办吧，试试看。',
		'hide character h',
		'i （……呼。）',
		//跳转【2-3-5】人手紧缺
		//为便于剧情跳转，将2-3-5剧情合并
        's ……',
		's 你的建议似乎卓有成效，至少一段时间内，没听说厂区有什么骚乱了。',
		's ……',
		's 一天早晨。',
		'show character h chat',
		'hdz 稍息！今天开始，我们编组缩小，中队总人数不变，来这里领你们的位置！',
		'hide character h',
		'h ……听说了吗，南边又出事情了，又抽调了不少人过去。',
		's 护卫队改成了两人一组的小队，你的任务是一线值勤。',
		's 你仍然将自己的面孔藏在布料后面，但就算如此，也挡不住工人的审视。',
		's 最终你只能微微抬起枪托，他们这才转走视线。',
		's 但是那些工人最后的目光很可怕，你能感觉到有什么东西正在人群中酝酿着。',
		's ……',
		'play sound factory_bell',
		's 一天晚饭时间，你正在岗位上照常值守，',
		'play music E3_steampunk_cult with loop fade 3 volume 50',
		's 去往食堂的人群中突然有人大喊一声，紧接着像是得到了什么信号一样，一大群人猛然转头冲向了高墙边缘。',
		'i （！什么情况？）',
		'play sound footsteps',
		'show scene wall with fadeIn duration 1s',
		'show character lc loaded',
		'lc 救命啊，有人挤我！',
		'hide character lc',
		'show character lb whisper',
		'lb 逃跑了，有人跑了！',
		'hide character lb',
		'show character lc loaded',
		'lc 帮帮我！',
		'hide character lc',
		's 你立刻冲上去阻止试图阻止人群，但却被不知道谁拉住了衣角。',
		's 眼前的工人实在太多，情况一旦失控，根本不是你们能解决的，更何况这段时间你们的人手已经削减了非常多。',
		//此前经历剧情【2-3-3】跳转【END你的功绩无人知晓】
		'jump E3-BEunknown_glory',

    ],

    /**
	 * ====================================
	 *【2-3-4】S2-3-4
	 * ====================================
	 **/
    'E3-S2-3-4':[
		{'Function':{
            'Apply': function () {
            setTextBoxCSS(textBoxE3);
            },
    
            'Reverse': function () {
            setTextBoxCSS(textBoxDefault);
            }   
        }},
		's 你作为护卫队员，履行着护卫队的职责。同样地，工人也本就应该像工人一样，做好自己的本职工作，而不是随意脱岗或者闹事。',
		'i 现在他们闹事是闲的，',
		'i 多加点工作，惩罚一下带头的，看他们还敢不敢？',
		'show character h chat',
		'hdz 行，那现在其他人去召集工人，你去把白天闹事的人带过来，',
		'hdz 待会你动手。',
		'i ……好。',
		'hide character h',
		//跳转【2-3-5】人手紧缺
		//为便于剧情跳转，将2-3-5剧情合并
		's ……',
		's 你的建议似乎卓有成效，至少一段时间内，没听说厂区有什么骚乱了。',
		's ……',
		's 一天早晨。',
		'show character h chat',
		'hdz 稍息！今天开始，我们编组缩小，中队总人数不变，来这里领你们的位置！',
		'hide character h',
		'h ……听说了吗，南边又出事情了，已经抽调了不少人过去。',
		's 护卫队改成了两人一组的小队，你的任务是一线值勤。',
		's 你仍然将自己的面孔藏在布料后面，但就算如此，你也挡不住工人的审视。',
		's 最终你只能微微抬起枪托，他们这才转走视线。',
		's 但是那些工人最后的目光很可怕，你能感觉到有什么东西正在人群中酝酿着。',
		's ……',
		'play sound factory_bell',
		's 一天晚饭时间，你正在岗位上照常值守，',
		'play music E3_steampunk_cult with loop fade 3 volume 50',
		's 去往食堂的人群中突然有人大喊一声，紧接着像是得到了什么信号一样，一大群人猛然转头冲向了高墙边缘。',
		'i （！什么情况？）',
		'play sound footsteps',
		'show scene wall with fadeIn duration 3s',
		'show character lc loaded',
		'lc 救命啊，有人挤我！',
		'hide character lc',
		'show character lb whisper',
		'lb 逃跑了，有人跑了！',
		'hide character lb',
		'show character lc loaded',
		'lc 帮帮我！',
		'hide character lc',
		's 你立刻冲上去阻止试图阻止人群，但却被不知道谁拉住了衣角。',
		's 眼前的工人实在太多，情况一旦失控，根本不是你们能解决的，更何况这段时间你们的人手已经削减了非常多。',
		//此前经历剧情【2-3-4】跳转【END背叛者的徽章】
		'jump E3-BEtraitor_badge',
    ],

    /**
	 * ====================================
	 *【2-3-5】S2-3-5
	 * ====================================
	 **/
    'E3-S2-3-5':[
		//为便于剧情跳转，已将2-3-5文本合并入2-3-3和2-3-4
    ],

    /**
	 * ====================================
	 *【BE你的功绩无人知晓】E3-BEunknown_glory
	 * ====================================
	 **/
    'E3-BEunknown_glory':[
		//【END 你的功绩无人知晓】
		//ito：调整了人称和部分文本。
		'i 别开枪！别开枪！拦住领头的！',
		'i 开枪就会失去控制！找其他人来！把他们拦住！',
		'play sound knock_metal',
		's 砰！！',
		's 但你还是听到了齿轮枪的鸣响。',
		'show character lc fighting',
		'lc 他们开枪了！',
		'hide character lc',
		'show character lb fighting',
		'lb *！走狗！揍他*的！',
		'hide character lb',
		'show character lc fighting',
		'lc 抢下来！拿他枪！！',
		'hide character lc',
		'i 别开枪！别……',
		'play sound door_slam',
		's 你想要继续呼喊，但瘦骨嶙峋的拳头砸在你的脸上，巨大的痛楚让你闭上了嘴。',
		's 下一刻，更多的人群涌了上来，将你压倒在地。',
		'play sound door_slam with loop',
		'i 有话呃，好好说……我以前也……咕，也是工人……我……我——',
		'stop sound door_slam',
		's 无数双脚踏在你的身上，你竭力想要发出声音，',
		'stop music E3_steampunk_cult with fade 3',
		's 但是你胸膛里的空气被落石般的踩踏一下一下地挤出身体，你最终连喘气的嘶声也发不出来了。',
		'show scene #000000',
		'play sound metal_bend',
		'i ……',
		's 在渐渐黑暗的视野中，你依稀听见自己被碾压碎裂的声音，然后一切都归于寂静。',
		'play sound notification',
		'show message Ending-E3unknown_glory',
		'end'
    ],


    /**
	 * ====================================
	 *【BE背叛者的徽章】E3-BEtraitor_badge
	 * ====================================
	 **/
    'E3-BEtraitor_badge':[
		//ito：调整了人称和部分文本。
		'i 快！找其他人来镇压！',
		'play sound knock_metal',
		's 你立刻开枪，钢钎刺穿了一个人的大腿，让他倒地不起，惨叫连连，',
		's 但是周围的更多的人并未因此被吓退，反而包围了上来。',
		'show character lc loaded',
		'lc 他开的枪！',
		'hide character lc',
		'show character lb fighting',
		'lb *，揍他*的！',
		'hide character lb',
		'i 反了你们，给我站住……',
		'play sound door_slam',
		's 瘦骨嶙峋的拳头砸在你的脸上，巨大的痛楚让你闭上了嘴。',
		's 下一刻，更多的人群涌了上来，将你压倒在地。',
		'i 你们这么做是没用的！我……',
		's 无数双脚踏在你的身上，你竭力想要发出声音，但是你胸膛里的空气被落石般的踩踏一下一下地挤出身体，你连喘气的嘶声也发不出来了。',
		//黑屏淡入
		'play sound door_slam',
		'show scene #000000',
		'stop music E3_steampunk_cult with fade 3',
		's 突然，你手上的枪被夺走，太阳穴传来沉重的一击，你的视野瞬间黑了下去。',
		'i ……',
		's ……',
		's ……',
		's “那些闹事的工人解决了吗？”',
		's “解决了。我手底下的护卫把领头的干掉了，剩下的不过都是些游兵散勇，一盘散沙，就都拿下了。”',
		's “怎么处理的？”',
		's “那领头的挂起来了，剩下的还控制着，您看——”',
		's “有多少人？”',
		's “上百号人吧。”',
		's “那就都放到核心里去吧。百来号人，招募一下就有了。反正想来干活的有的是。”',
		's “是，这就去执行。”',
		's “……对了，我们护卫队这次维护秩序也出了不少力，您看是不是……”',
		's “哎，你看你说的，我们怎么可能忘记护卫队的功劳呢。这次参与执勤的，都要奖赏，队长你领导有功，得颁一个特别绩效奖才行。”',
		's “这是我应当做的。”',
		's 他接过了徽章。',
		's 那徽章的缝隙中，仿佛浸透着血。',
		'play sound notification',
		'show message Ending-E3traitor_badge',
		'end'
    ],
})	