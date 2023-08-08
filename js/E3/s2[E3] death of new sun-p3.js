/**
 * =======================================
 * S2剧情：		    新日之暗（part3）
 * 文件名：			death of new sun p3
 * 创建日期：		2023-02-19
 * 时间线索引：		【4-1】&【5-1】&【5-1-1】&【5-2-1】&【5-3-1】&【6-1】&【BE 长夜冰雕】&【BE 化身扭曲】&【BE 畸变日轮】
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
	 *【4-1】S4-1
	 * ====================================
	 **/
    'E3-S4-1':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        'show scene factory with fadeIn duration 3s',
        's 时间一天天过去，工厂的封闭并没有为你的生活带来多少改变，你重复着工作，宛若新日庞大结构中的一枚齿轮。',
        's 维修新日的招工通知依旧在播报，只是你再也没得到机会。',
        'show scene E3_dorm with fadeIn duration 3s',
        'show character a bored',
        'centered',
        'a 今天怎么回来那么早？',
        'i 你不也是嘛。',
        'show character a worried',
        'a 我们那边车间有人在工位上扭了。',
        'i 果然……我们也是。',
        'a 唉，你说那么多人都扭了，抚恤金得发多少啊。',
        'i 那也和我们没关系了。',
        'a 我猜过两天政策会有大变化。',
        'i 怎么说？',
        'a 这两天我们见到的护卫队成员越来越少了，估计都去处理扭曲了，按这个势头，应该基本到极限了。',
        'i 接下来会发生什么呢……',
        'a 不知道，做好最坏的打算吧。',
        'hide character a',
        's ……',
        'play sound factory_bell',
        's 几天后，你们躺在宿舍床上，突然被广播声吵醒。',
        'i （什么鬼广播，让不让人睡觉了！）',
        's “现在播报一则紧急通知，”',
        's “由于近日厂区扭曲事件频发，严重影响了生产工作，工厂护卫队也在与扭曲的战斗中受到了极大损失，现决定做出以下安排：”',
        's “不再执行工厂封闭政策，各岗位人员可自由选择申请离岗返乡或是继续住在厂区宿舍。”',
        'show character a happy',
        'a ……你看，我说什么来着。',
        'i 唉……',
        'hide character a',
        'play music crowd with loop fade 3',
        'play sound footsteps',
        's 你们听到一阵响动，不仅仅是隔壁，整栋宿舍楼都以极快的速度嘈杂起来，无数双脚在楼道中来回走动。',
        'gr 你听到广播了吗？',
        'gr 我要回去！回家！',
        'gr 外面怕不是也全是扭曲，我们出得去吗？',
        'gr 太好了，赶得上回家见一面了……',
        'stop music crowd with fade 3',
        'i 啊……',
        'i 好奇怪啊，完全没有能够回家之类的喜悦……',
        'i 就好像这事跟我无关一样。',
        'show character a bored',
        'a 唉……',
        'i 怎么突然叹气了？',
        'a 和扭曲的较量，终究是我们输了啊。',
        's 你们靠在床上，一起感慨着。',
        'a ……不过无论如何，我这回真的得走了。多一天我都待不下去。',
        'a 你要一起走吗？',
        'hide character a',
        'play sound choices',
        //给出选项，选离开跳转【5-3-1】，不走跳转【5-1】
        {'Choice':{
            'Dialog': 's 要离开吗？',

            'no': {
                'Text': '算了，还是不走了',
                'Do': 'jump E3-S5-1',
                //跳转到【5-1】S5-1
            },
            'yes': {
                'Text': '终于可以回家了',
                'Do': 'jump E3-S5-3-1',
                //跳转到【5-3-1】S5-3-1
            },
        },},
    ],

    /**
	 * ====================================
	 *【5-1】S5-1
	 * ====================================
	 **/
    'E3-S5-1':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        'i ……我不太想走，还是待在这儿吧。工厂里没准还安全些，况且回家的路费又是一大笔开销。',
        'show character a bored',
        'a 那你保重。',
        'i 你也是。',
        'hide character a',
        's 当天下午，冈田就办妥了离岗手续，离开了这里。',
        's 与他一起离开的还有许许多多的人，你从宿舍的窗口看着他们穿过厂区的道路，走向远处隐没在黑暗中的冰原。',
        's ……然后，新一批入职的员工穿过道路，补上了宿舍楼中的空位。',
        'play sound factory_bell',
        's “现在发布一则新的通知，由于近日扭曲高发，考虑到部分员工有居留厂区的需求，请各位留厂员工向组长汇报未来一星期的上工情况。”',
        's “同时考虑到食堂是人员集聚和流动最高的区域，今日起食堂将实施封闭，食物和饮用水将由专员配送到各楼层，望各位员工知悉。”',
        'i （虽然说打定主意待在这里了，但是吃饭住宿还得花钱。）',
        'i （要不要继续上工挣点钱呢……）',
        'play sound choices',
        //给出选项，选上工跳转【5-1-1】，不上工跳转【5-2-1】
        {'Choice':{
            'Dialog': 's 要去上工吗？',

            'no': {
                'Text': '不去',
                'Do': 'jump E3-S5-2-1',
                //跳转到【5-2-1】S5-2-1
            },
            'yes': {
                'Text': '去',
                'Do': 'jump E3-S5-1-1',
                //跳转到【5-1-1】S5-1-1
            },
        },},
    ],


    /**
	 * ====================================
	 *【5-1-1】S5-1-1
	 * ====================================
    **/
    'E3-S5-1-1':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        'i （住宿舍是一笔不小的开销，要是不上工坐吃山空，万一出个啥意外就完了。）',
        'i （唉，真是劳碌命……）',
        's 于是，你向组长报告要继续上工。',
        'show scene factory with fadeIn duration 3s',
        's 仿佛什么都没有变过一般，你继续重复着工作与休息，再度化作新日庞大结构中的一颗齿轮。',
        's 你看到人能填满的车间越来越少，昨天才见过面的人今天就可能成为一具被齿轮枪贯穿的残躯，奔流在新日内部的蒸汽咆哮越发尖锐。',
        's ……',
        's 某一天，你走在上工的路上，突然听到一阵嘈杂。',
        'show scene #000000',
        'centered',
        'show image E3_cg3 with fadeIn duration 3s',
        'gallery unlock E3_cg3',
        'centered',
        'play sound notification',
        'show message E3_cgunlock3',
        'i （什么声音？好像是一群人在跑？从北边传来的）',
        'i （……不管了，还是上工吧）',
        'show scene #000000',
        's 你收回注意力，思考着今天要做的工作。',
        'centered',
        //这里可以加个cg，两条相邻的小巷子，一边是跑向外面的一大伙人，另一边是上工的主角
        //进行一个随机检测50%概率跳转【BE 化身扭曲】BE Change，50%概率进入结局【BE 畸变日轮】BE twisted_sun
        {
			'Conditional': {
				'Condition': function(){
					const result = Math.random();
					if(result <= 0.5) {
						return 'BE-change';
					} else {
						return 'BE-twisted_sun';
					}
				},
				'BE-change': 'jump E3-BEchange',
				'BE-twisted_sun': 'jump E3-BEtwisted_sun',
			}
		},

    ],

    /**
	 * ====================================
	 *【5-2-1】S5-2-1
	 * ====================================
	 **/
     'E3-S5-2-1':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        'i （现在出去上工太危险了）',
        'i （还是再过一段时间看看吧……）',
        's 于是，你就此开始了宿舍里的蜗居生涯。',
        's 每当白天你向窗外看去，只见厂区里活动的身影逐渐稀少，',
        's 而每当明亮午夜的无边寂静降临，非人般的鸣奏声则逐渐喧闹。',
        's 护卫队就像是失踪了一般，只有食物定期出现在走廊尽头，直到某一天再也没有像样的饭菜，而是成箱的压缩饼干。',
        'show scene corridor_day with fadeIn duration 3s',
        'i ……',
        'show scene E3_dorm with fadeIn duration 3s',
        'play sound door_slam',
        's 没有人分管派发的顺序，你尽可能多地拿走了食物与水，反锁了宿舍门，望着散发着霉味的幽暗房间出神。',
        's ……',
        {
			'Conditional': {
				'Condition': function(){
					const result = Math.random();
					if(result <= 0.5) {
						return 'stay_change';
					} else {
						return 'stay_sun_death';
					}
				},
				'stay_change': 'jump E3-BEchange',
				'stay_sun_death': 'jump E3-BEsun_death',
			}
		},
        //进行一个随机，50%概率跳转【BE 化身扭曲】BE Change，50%概率进入结局【BE 日之蚀】Sun Death
    ],

    /**
	 * ====================================
	 *【BE 畸变日轮】BE twisted_sun
	 * ====================================
	 **/
    'E3-BEtwisted_sun':[
        'play music E3_steel loop with fade 7 volume 50',
        'show scene #000000 with duration 7s',
        's 突然之间，仿佛自极远处传来轰鸣，',
        'show scene #000000',
        's 惨白的光芒闪过，将你的视野化作一片漆黑，泯灭了所有的声音。',
        'centered',
        'show image E3_cg4 with fadeIn duration 3s',
        'gallery unlock E3_cg4',
        'centered',
        'play sound notification',
        'show message E3_cgunlock4',
        's 许久，恢复视野的你抬起头，却只见那永恒散发着光与热的日轮一点点黯淡下去，',
        'stop music E3_steel with fade 7',
        's 黑暗笼罩的厂区里，响起了一阵阵如潮般“圣哉！”的狂热赞颂。',
        'play sound notification',
        'show message Ending-E3twisted_sun',
        'end'
        //cg畸变日轮
    ],

    /**
	 * ====================================
	 *【BE 化身扭曲】BE Change
	 * ====================================
	 **/
     'E3-BEchange':[
        'play music E3_a_cut_in_love',
        's 然而令你始料不及的是，一股眩晕突然击中了你。',
        's 你踉跄着往前几步，跪倒在地。',
        's 你感觉身体变得滚烫，血管里像是流淌着岩浆，',
        's 不……准确来说，是蒸汽。',
        's 你感觉到坚硬的东西在体内生长，刺破皮肤化作狰狞的黄铜尖刺。',
        's 你张开嘴想要说话，却发现牙齿一颗颗掉在地上，锋利的齿轮取代了它们的位置——',
        's 太阳！是太阳！',
        's 一瞬间，你仿佛感觉到新日在胸腔中燃烧，强烈的喜悦在心头涌起，涤荡了最后的不安。',
        's 你张开嘴，从胸口发出了喜悦的呐喊：',
        'show character gw silhouette',
        'i 圣哉！圣哉！圣哉！',
        'play sound notification',
        'show message Ending-E3change',
        'end'
    ],


    /**
	 * ====================================
	 *【BE 日之蚀】sun_death
	 * ====================================
	 **/
    'E3-BEsun_death':[
        'show scene E3_dorm',
        'play music E3_peaceful_industry with fade 7 loop volume 50',
        's 又不知过了多少日子，你在房间里醒来，喝光了最后的饮用水，珍而重之地将最后一点饼干屑舔干净，然后，拿起齿轮枪走出门。',
        //背景换成走廊
        'show scene corridor_day with fadeIn duration 3s',
        'centered',
        's 门外一片寂静，新日的光从走廊涂黑窗户的裂隙中透入，但是没有人去修补。',
        's 你手握齿轮枪，蹑手蹑脚地经过走廊中的一扇扇房门，',
        's 楼梯间就在前方，只要到了那里，你就能得到补给。',
        's 你咽了口唾沫，感受到肠胃欢欣鼓舞地蠕动。',
        's 你路过了一扇打开的门，里面空无一人，地上仅有一滩血迹。',
        ///紧张的BGM
        'stop music E3_peaceful_industry with fade 3',
        's 突然，你感觉到了一丝不安，你注意到裂缝中新日的光消失了。',
        'play sound door_slam with loop fade 2',
        's 下一刻，走廊中紧闭的房门忽然一扇扇打开，',
        'stop sound door_slam',
        //插入砰，砰，砰的开门声，切换成门开启的cg
        's 你紧接着看到了门内的东西。',
        'show character gw silhouette',
        'centered',
        'play sound ring_telegraph',
        'show scene #000000',
        'centered',
        'play sound notification',
        'show message Ending-E3sun_death',
        'end'
    ],

    /**
	 * ====================================
	 *【5-3-1】S5-3-1
	 * ====================================
	 **/
    'E3-S5-3-1':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        'show scene E3_dorm',
        'i 我也想走，或许我们能同路一起走一段。',
        'show character a happy',
        'a 那正好，一会儿一块去申请吧。',
        'show scene factory with fadeIn duration 3s',
        's 你们以最快的速度赶往人力部门，那里已经排起了长长的队伍，一阵拥挤之后，你们总算在中午之前开好了证明。',
        'show scene E3_dorm with fadeIn duration 3s',
        'centered',
        's 宿舍里要收拾的东西不多，你们打包好被褥，装满背包，小小的宿舍就清空了。',
        'show scene corridor_day with fadeIn duration 3s',
        'play sound footsteps',
        'centered',
        'show scene factory with fadeIn duration 3s',
        'play sound footsteps',
        'centered',
        'show scene ice_day with fadeIn duration 3s',
        'play sound footsteps',
        'centered',
        's 背对着新日的光，你们跨过那扇曾经紧闭的铸铁大门，踏上了寒冷的冰原。',
        'show character a bored',
        'a 让我想想……我们可以去附近的镇上找一辆雪橇车，多拉几个人一起租还能省不少钱。',
        'i 好主意。',
        'centered',
        'show scene village with fadeIn duration 3s',
        'centered',
        's 但等到了小镇，却发现迎接你们的是租车行门外的歇业牌子。',
        'show character a bored',
        'a 劳驾，问你个事，这里怎么回事啊？为什么没地方租车了？',
        'hide character a',
        'lr 你们是刚从厂里出来的吗？',
        'i 是啊，怎么了？',
        'lr 难怪你们不知道。',
        'lr 现在外面到处都在闹扭曲，各个镇子之间的大路都被栏起来了，还有枪架着，就是怕有扭曲跑进来。',
        'show character a worried',
        'a 没法过去吗？',
        'lr 连只鸟都不行。',
        'i 糟糕了，这下子咋办……',
        'a 他说路上有关卡，那我们可以走别的地方绕过去。',
        'i 啊？你说笑吧？',
        'a 现在想回家，走回去是唯一的法子了。',
        'i 唉这……这么冷……',
        'i 算了，走吧！',
        'hide character a',
        's 你们到附近的商店里尽可能多地买了些食物和暖宝宝，便踏上了归家之路。',
        'show scene ice_day with fadeIn duration 3s',
        's 和那位路人说的一样，大路上到处都设了关卡，你们只能绕行穿越附近的冰原和小山。',
        's 无人清理的小道非常难走，但好在你们并不是冰原中唯一的行人，在你们前后还有许许多多和你们一样冒险徒步的人。',
        'i 你记得你家在哪个方向吗？',
        'show character a bored',
        'a 跟着那根管道走就到了，我之前来的时候看的清清楚楚。',
        'i 我也差不多，之前厂子不是有个标语吗，“通往千家万户”。',
        'a 倒是挺应景。',
        'i 跟我说说你家呗。',
        'a 也没什么，就是个普通的小村子。',
        'show character a happy',
        'a 不过村口有棵大树，长了得有十好几年，这还挺稀奇的，我们平时闲得没事就经常在树下堆雪……',
        'i （这不是说了一大堆吗）',
        'show scene ice_night with fadeIn duration 3s',
        'play sound wind_winter',
        's 很快夜幕降临，而冰原的夜晚并不仁慈。',
        's 你们和其他几个人找了一处避风的地方，蜷在一起抵御严寒。',
        's ……',
        'show scene ice_day with fadeIn duration 3s',
        's 第二天早上，你几乎是被活生生冻醒的。',
        'show character a worried',
        'a 喂，上路了，醒醒……',
        'i 怎么了？',
        'a 他……',
        's 看着沉默的冈田和保持着蜷缩姿势的那人，你明白了一切。',
        'i ……我们找个地方把他埋了吧。',
        'a 这荒郊野岭土都冻结实了，应该不太可能……',
        'i 唉……',
        'i 长夜漫漫，新日庇佑。',
        'a 长夜漫漫，新日庇佑。',
        'hide character a', 
        'i （之后……我们还能顺利走到家吗……）',
        //如果没有经历过事件【2-1-2】和【3-1】，转至【BE 长夜冰雕】，否则转至【6-1】
        {
			'Conditional': {
				'Condition': function(){
					if(E3_repair_selected_2 = true) {
						return 'alive';
					} else {
						return 'dead';
					}
				},
				'alive': 'jump E3-S6-1',
				'dead': 'jump E3-BElight',
			}
		},
    ],

    /**
	 * ====================================
	 *【BE 长夜冰雕】BE Light
	 * ====================================
	 **/
    'E3-BElight':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        'show scene ice_day',
        's ……',
        'play sound wind_winter',
        's 距离启程已经过去了不知道几天，你感觉寒冷愈发侵占了你的身体。',
        's 胃就像一个无底洞，无论投入多少食物也无法从中榨出一丝暖意。',
        's 每天早上，你都需要花很长一段时间才能暖和起来。',
        'i （冷……）',
        'i （好冷啊……）',
        'i 喂，冈田，你怎么样了？',
        's 你一边搓着手醒来一边看向冈田，却发现他面前的雪地上有一片冻硬了的字。',
        's “如果你看到了这些，就说明我没能醒来。”',
        's “下半身已经没有知觉了，可以的话请告诉我父母我的位置，然后，帮我在大树底下再堆一次雪吧。”',
        'i ……',
        's 不知为何，你没有什么特别的想法，只是把他背包里的食物和暖宝宝取走，背起行囊再度上路。',
        //待补充particle效果
        'play sound wind_winter',
        's 很快下起了大雪，你沿着供能管道的黑影摸索着向前，胸口的一点热量仿佛很快就要散失殆尽。',
        's 路上没有人，雪也没有停，所以你也不敢睡下，只是一路向前。',
        'i （唉……我到底为啥要出来啊，明明待在工厂里用不着烦恼吃喝，还有足够的供暖，甚至热得不行……）',
        's 回想着那些此刻已经变得遥远的温暖记忆，你的身体仿佛也温暖了一点，前进的步伐变得有力。',
        'show scene ice_night with fadeIn duration 3s',
        's 直到半夜，雪终于停了，此时天空变得无比澄澈，无数星光映亮了积雪。',
        'i 呼，终于熬过来了……',
        's 于是，在温暖如春的冰原上，你脱下了外套，放松地前进着。',
        'play music normal_ending with fade 5',
        'i 你说你啊，怎么那么笨，我之前干啥你都要跟着一块，现在好了吧，就剩我了。',
        'i 这么大了还堆雪，幼不幼稚啊。',
        'i 还要我帮你堆。',
        'i 真是……',
        's 你低下头，看了看自己发青的双手。',
        'i 我也，没法帮你堆啊。',
        's 四肢感受到的温暖变作了滚烫，宛若在沸水中浸泡，你清楚时间已经不多了。',
        's 最后的意识里，你模糊地抬起头，回看身后仍旧明亮的新日之光，然后将目光投向了澄澈的夜空。',
        'show scene #000000',
        'i 不知道我的灵魂，',
        'show image E3_cg2 with fadeIn duration 3s',
        'gallery unlock E3_cg2',
        'i 能不能回家呢……',
        'centered',
        'play sound notification',
        'show message E3_cgunlock2',
        'centered',
        'play sound notification',
        'show message Ending-E3light',
        'end',
        //cg长夜冰雕，BGM希望の花
    ],

    /**
	 * ====================================
	 *【6-1】S6-1
	 * ====================================
	 **/
    'E3-S6-1':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        //仅有经历过事件【2-1-2】和【3-1】的才能进入此剧情
        'show scene ice_day',
        'i 靠……真的冷死了！',
        'show character a worried',
        'a 我觉得我们得想想办法，不然再过几天迟早得冻死。',
        'i 嗯……',
        's 你把目光投向了不远处的供热管道。',
        'a 那里确实是有一大堆热能，但是那么厚的管道隔热层，我们也搞不定啊。',
        'i 话不能这么说。',
        'hide character a',
        'play sound stats_up',
        's 你在背包里翻找了一下，找出一个外壳有点融化的装置。',
        'i 我之前不是去当了维修员吗，出来的时候一团乱麻，他们估计也没清点好我们带的装备，这个被我偷偷保存下来了。',
        'show character a bored',
        'a 这是什么？',
        'i 维修用的简易控制台，可以解除新日构造的锁定。',
        'a 你的意思是？',
        'i 有了这个，我们就可以偷一点新日的能源。',
        'show character a happy',
        'a 好耶！',
        'hide character a',
        'play sound knock_metal',
        's 于是你们迅速行动起来，在管道脚下解锁了维修间的大门，经过一系列敲敲打打的工作，你们成功用拆下的一部分冗余零件造出了一个简单的加热系统。',
        'play sound bird',
        's 从采样口流出的能源经过铜管，加热了这个房间的空气，久违地，你们感受到了春天般的温暖。',
        'show character a bored',
        'a 要不今天就先休息吧……',
        'i 附议。',
        'hide character a',
        's 第二天一早，你们离开了这里，但是没有拆除加热装置，只是为它加上了一个开关，如果后面有人路过这里，至少可以获得一份温暖。',
        's ……',
        'show character a happy',
        'a 那边不远就是我家了！我要往那边走了。',
        'i 保重啊，冈田。',
        'a 你也是，保持联系！',
        'i 好！',
        'hide character a',
        's 伴随着分支的管道，你们去往了不同的方向。',
        's 而你的旅途，同样也在几天之后抵达了终点。',
        'show scene village with fadeIn duration 3s',
        's 当那个熟悉的镇子出现在前方，你几乎流下眼泪。',
        'play sound footsteps',
        's 你紧赶几步，鼓起力气拖着疲惫的身体来到了村口。',
        'db 你是……？',
        //进行一个50%概率判断，一半概率三个选项都是“撕了他”，一半概率是正常的打招呼选项
        // {
		// 	'Conditional': {
		// 		'Condition': function(){
		// 			const result = Math.random();
		// 			if(result <= 0.5) {
		// 				return 'homechange';
		// 			} else {
		// 				return 'homehello';
		// 			}
		// 		},
		// 		'homechange': 'jump E3-change',
		// 		'homehello': 'jump E3-hello',
		// 	}
		// },
        'jump E3-hello'
    ],

    'E3-change':[
        //撕了他分支
        'play sound choices',
        {'Choice':{
            'Dialog': 's 你怎么回答大伯？',
            'one': {
                'Text': '撕了他',
                'Do': 'jump E3-change-end',
            },
            'two': {
                'Text': '撕了他',
                'Do': 'jump E3-change-end',
            },
            'three': {
                'Text': '撕了他',
                'Do': 'jump E3-change-end',
            },
        }},
    ],

    'E3-change-end':[
        'play music E3_a_cut_in_love',
        's 你一口咬住了面前的人，金属的利齿穿过层层布料刺入血肉，让你发自内心地狂喜。',
        's 你感觉身体变得滚烫，血管里像是流淌着岩浆，',
        's 不……准确来说，是蒸汽。',
        's 坚硬的东西在体内生长，刺破皮肤化作狰狞的黄铜尖刺，',
        's 你仿佛感觉到新日在胸腔中燃烧，强烈的喜悦在心头涌起，并且想要分享给周围所有的人。',
        's 你抱着不断挣扎的染血躯体，发出了喜悦的呐喊：',
        'show character gw silhouette',
        'i 圣哉！圣哉！圣哉！',
        'play sound notification',
        'show message Ending-E3change',
        'end'
    ],

    'E3-hello':[
        'play sound choices',
        {'Choice':{
            'Dialog': 's 你怎么回答大伯？',
            'one': {
                'Text': '大伯',
                'Do': 'jump E3-hello-end',
            },
            'two': {
                'Text': '是我呀！',
                'Do': 'jump E3-hello-end',
            },
            'three': {
                'Text': '我从新日工厂回来',
                'Do': 'jump E3-hello-end',
            },
        }},
    ],

    'E3-hello-end':[
        'db 哦对，这不是他家那谁吗？怎么突然回来了？你爸妈都没收到信啊！',
        'i 说来话长……',
        'i 我爸妈还好吗？',
        'db 都挺好的，你爸最近能出来走了。',
        'i 嗯……',
        'play sound door_slam',
        's 你突然感觉眼皮沉重无比，还没来得及说就倒了下去。',
        'show scene #000000',
        's ……',
        'show scene E3_dorm with fadeIn duration 3s',
        'play sound bird',
        's 当你苏醒过来时，已经躺在了柔软的床上，身上厚厚的被子压得你动弹不得，',
        's 周围的景物熟悉而又陌生。',
        'i 回来了……',
        'm 可算是醒了……怎么会这样子哦，瘦了这么多……',
        'm 别下床，多休息会，身上那么多冻伤，想要啥你跟我说。',
        'm 咋了到底，厂里好久没有消息了，最近供能也不怎么稳定。',
        's 你张开嘴，想要说出这段时间你在工厂里经历的一切，',
        's 但千言万语最后只变成了一句话。',
        'i 我没事，就是厂里担心我们安全，放我们回来了。',
        'm 那有说什么时候可以回去上班吗？',
        'm 不会是找了个名头裁员吧……',
        'm 你爸他的腿还没好透，你要是被裁了……',
        's 你移开目光，看向窗外，黑暗的天穹带着一丝明亮，那是新日的光。',
        's 可下一刻，你突然发现黑暗的颜色陡然深了许多。',
        's 你猛然起身，挣扎着推开被子扑到窗边，',
        's 远方天边，那曾经照彻冰原的新日之光正在迅速黯淡下去；',
        's 但同时你看到，一队穿着崭新工装的人正在启程，',
        's 窗外传来他们充满希望的声音，正如当初满怀希望的你。',
        'show scene ice_day with fadeIn duration 3s',
        'play music normal_ending with fade 5',
        's “去大厂！去新日！”',
        's “新日！新日好啊，新日工厂里的人都是吃香的喝辣的，有油膏抽，还有新鲜水果吃！但是万一人家看不上咱们怎么办？”',
        's “哎，咱们好好表现。管道什么的咱们平时没少修理！他们肯定要咱们。”',
        's “等等，不太对劲……新日是不是不亮了？”',
        's “偶尔暗一下嘛，很正常，肯定过两天就恢复了。”',
        's “哥，你帮我看看我这衣服是不是有点皱了……”',
        's 人群的声音渐渐远去，消失在冰原的天边。',
        'centered',
        'show scene #000000',
        'play sound notification',
        'show message Ending-E3return_home',
        'centered',
        //跳转【番外】
        'jump E3-S',
    ],

    
    /**
     * ====================================
     *【番外】S
    * ====================================
    **/
    'E3-S':[
        'play sound typing',
        'nvl <p></p>-赞颂的蒸汽人偶-',
        'play sound typing',
        'nvl “在黑暗的地下，这是唯一的阳光。”',
        'play sound typing',
        'nvl 编号：D-01-65472  等级：WAW  伤害：███  最大能源产量：███',
        'play sound typing',
        'nvl 工作偏好（按员工等级顺序排列）：',
        'play sound typing',
        'nvl 本能：0%   0%  0%   0%    0%',
        'play sound typing',
        'nvl 洞察：0%  0%   40%  50%   50%',
        'play sound typing',
        'nvl 沟通：50%  50%  55%   60%  65%',
        'play sound typing',
        'nvl 压迫：30%  30%  30%   30%  30%',
        'play sound typing',
        'nvl 计数器极值：█  伤害抗性：0.8  0（免疫）  1.5  0.8',
        'show scene #000000',
        'play sound typing',
        'nvl <p></p>管理须知：',
        'play sound typing',
        'nvl 1、自律等级低于4级的员工禁止进入收容室',
        'play sound typing',
        'nvl 2、对D-01-65472的工作结果为优时将会使员工恢复精神值',
        'play sound typing',
        'nvl 3、每当有一名员工在收容室内死亡，D-01-65472的计数器将会减一',
        'play sound typing',
        'nvl 4、当工作结果为差时，D-01-65472的计数器有大概率减小',
        'play sound typing',
        'nvl 5、当计数器归零，将会有多名员工被蛊惑进入D-01-65472的收容室，D-01-65472会杀死进入收容室的员工',
        'play sound typing',
        'nvl 6、被D-01-65472杀死的员工会转化成D-01-65472-1并产出大量能源，当收容室内有超过两个D-01-65472-1时，D-01-65472将会突破收容',
        'play sound typing',
        'nvl 8、当产生的D-01-65472-1个体数量达到9个时，所有的D-01-65472-1个体将会以最快速度聚集在某一休息室内，以D-01-65472为核心形成巨大的机械发光结构，烈日将照耀整个设施',
        'show scene #000000',
        'play sound typing',
        'nvl <p></p>收容物故事：',
        'play sound typing',
        'nvl 这是一个类人形的机器人，被发现于郊区的冰原上。',
        'play sound typing',
        'nvl 最开始我们以为这是一台纯粹的机械造物，但是它全身的铜管与齿轮呈现出很强的生物感，最终在它体内检出的生物残渣让我们确定这是一只由人类转化而来的机械怪物。',
        'play sound typing',
        'nvl 它平时并无过多的活性，只是站在收容室内一遍遍地赞美神圣的太阳，但当我们的员工进入收容室之后，它会表现出强烈的攻击性，在此基础上，员工会被它描述的伟大太阳所影响，获得一定的精神恢复，但更多的时候是变成狂热的太阳教徒。',
        'play sound typing',
        'nvl 因为这种改变纯粹源自员工自身精神层面，并且有助于员工日常的工作，因此我们并未对其进行处理。',
        'play sound typing',
        'nvl 毕竟我们都知道，在黑暗的地下，这是唯一的阳光。',
        'show scene #000000',
        'nvl <p></p><音频记录>',
        'nvl “能再为我们介绍一下你之前说的那个关于制造太阳的远古文明的故事吗？”',
        'nvl “圣哉！圣哉！圣哉！”',
        'nvl “你好，请问你能再描述一下关于你说的新日吗？”',
        'nvl “伟大的太阳！出自我们的双手，圣哉！圣哉！圣哉！”',
        'show scene #000000',
        'nvl <p></p><音频记录>',
        'nvl “啊，听你这么描述，我也想见见那个带来光与热的造物了。”',
        'nvl “圣哉！圣哉！圣哉！”',
        'nvl “呃……圣……圣哉！圣哉！”',
        'nvl ……',
        'nvl 喷溅出的鲜血遮住了监视器，收容室被打开后，员工███的皮肤与肌肉组织碎片涂满了整个地板，第二个金属人偶出现在收容室内。',
        'show scene #000000',
        'nvl <p></p><音频记录>',
        'nvl “*！他*的！我们需要增援！那些喊着圣哉的怪物在到处乱跑，杀我的手下！”',
        'nvl “增援马上抵达，再坚持一下。”',
        'nvl “等等……它们在干什么？”',
        'nvl “请描述你看到的场景。”',
        'nvl “那些东西停止了一切攻击，然后全部堆在一起，零件和管线全部掉了下来，就好像是在融化一样。”',
        'nvl “……”',
        'nvl “看起来不需要增援了，它们自毁了。”',
        'nvl “……好的。”',
        'nvl “***********！增援增援啊啊啊啊啊增援！那些鬼东西根本没死！那些齿轮全是活的！它们在聚合在发光，整个休息室的地板都被掀了起来，它们长在了地板上！”',
        'nvl “稍等……”',
        'nvl “啊啊啊啊啊啊啊啊啊！”',
        'nvl “喂？请问你还在吗？”',
        'nvl “……”',
        'nvl “喂？”',
        'nvl “圣哉！圣哉！圣哉！圣哉！圣哉！圣哉！圣哉！……”',
        'end'
    ],
})