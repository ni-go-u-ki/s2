/**
 * =======================================
 * S2剧情：		    新日之暗（part2）
 * 文件名：			death of new sun p2
 * 创建日期：		2023-02-19
 * 时间线索引：		【2-2-2】&【2-2-3】&【2-2-4】&【2-1-1】&【2-1-2】&【2-1-3】&【2-1-4】&【3-1】&【3-1-1】&【3-1-2】
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

 monogatari.script({
/**
 * ====================================
 *【2-2-2】S2-2-2
* ====================================
**/
    'E3-S2-2-2':[
        //高墙背景
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        'centered',
        'play sound footsteps',
        'show scene corridor_night with fadeIn duration 3s',
        'centered',
        'play sound footsteps',
        'show scene wall with fadeIn duration 3s',
        'centered',
        'i ……',
        'show scene E3_dorm with fadeIn duration 3s',
        'centered',
        'show character a bored',
        'a 怎么样？',
        'i 那边也是墙。',
        'show character a worried',
        'a 坏了。',
        'i 看起来我们是逃不出去了……',
        'show scene factory with fadeIn duration 3s',
        'play sound factory_bell',
        's 漫长的一夜过去，第二天一早，你们和不少人一起走进了食堂。',
        's 食堂门口，护卫队沉默地把守着，整个大厅里几乎没人说话，早餐沉浸在紧张的气氛中。',
        'show character lb chat',
        'lb ……你知道吗，我听一个来这边送菜的朋友偷偷跟我说，又有一批人被抓起来送到隔壁了，跟我们这儿差不多。',
        'hide character lb',
        'show character lc loaded',
        'lc 我说了吧，被抓回来关这儿的人只会越来越多。毕竟是扭曲啊，谁不跑呢。',
        'hide character lc',
        'show character lb chat',
        'lb 唉，现在被关在这儿，想走也走不了喽。',
        'hide character lb',
        'i (看起来大家都想跑啊……)',
        'play sound factory_bell',
        's 吃完早饭，你们被押送到各自的工位上。每天的工位都是随机分配的，甚至上午和下午身边都是不一样的陌生面孔，但是要做的事情却一直没什么区别。',
        's 传送带不断将新日上拆换下来的老旧零件送到你的面前，而你的职责是快速判断出零件的损毁等级，不能使用的拿下来丢到一旁，还能用的放到另一条传送带上，重复的工作每一小时五十分钟才有一次短暂的休息。',
        's 除了对工人的防守更加严密以外，似乎一切都没有改变。',
        'i 不知道情况到底怎么样了啊……',
        's ……',
        'play sound factory_bell',
        's 第二天。',
        'show character lb chat',
        'lb 我听说有一整个宿舍的人一起扭曲了。',
        'hide character lb',
        'show character lc loaded',
        'lc ……消息准确吗？',
        'hide character lc',
        'show character lb chat',
        'lb 我朋友跟我说的。',
        'hide character lb',
        'show character lc loaded',
        'lc 但我听说的是扭曲把着门杀光了一整个宿舍。',
        'hide character lc',
        'show character lb chat',
        'lb 我去……',
        'hide character lb',
        's ……',
        'show character lb chat',
        'lb 厂里现在好像不给外面的人进来了，就连食物都是运到门口我们的人再自己搬进去。',
        'hide character lb',
        'show character lc loaded',
        'lc 怎么可能？最近扭的人这么多，厂里肯定缺人手，这会儿指不定正在招人呢。',
        'lc 这两天工作量真是越来越大了，哎哟……',
        'hide character lc',
        's ……',
        'show character lb whisper',
        'lb 不过昨天南边的厂区好像有人跑出去了，护卫队追了一公里没追上。',
        'hide character lb',
        'show character lc loaded',
        'lc 才追一公里？意思是咱们前两天要是跑得快没准就跑掉咯？',
        'hide character lc',
        'show character lb whisper',
        'lb 那可不！那些护卫追到后面也懒得再追了。再让我跑一次我肯定往死里冲……不过我觉着咱们还是得分头跑。',
        'hide character lb',
        'show character lc loaded',
        'lc *的你觉得你还能再跑一次？这边的围墙这么高，以前的破铁丝网能比吗？你要怎么翻过去？',
        'lc 什么时候才能走啊啊……',
        'hide character lc',
        'i ……',
        'i (每天都是这样那样的消息，没一个是准确的)',
        'centered',
        'show scene E3_dorm with fadeIn duration 3s',
        's 当晚，你和冈田满脸疲惫地在宿舍碰上。',
        'show character a bored',
        'a 我那边的人说想要一起跑。',
        'i 每天随机编组，一起跑是怎么商量出来的？',
        'a 因为太多人都想跑了，和是谁没关系。',
        'i 护卫队不管吗？',
        'a 你忘了，昨天才从这里撤走一队人。',
        'i 唉……',
        'a 你怎么想？',
        'i 啊？',
        'a 他们打算明天晚上吃饭的时候再冲一把。',
        'a 你打算怎么做？我们要跟他们一起吗？',
        'hide character a',
        'i 我……',
        'play sound choices',
        //给出选项,一起逃/都这个时候了,算了
        //不逃跳转【2-2-3】,逃跳转【2-2-4】
        {'Choice':{
            'Dialog': 's 要冲吗？',

            'no': {
                'Text': '算了，不冲',
                'Do': 'jump E3-S2-2-3',
                //跳转到【2-2-3】S2-2-3
            },
            'yes': {
                'Text': '冲冲冲！',
                'Do': 'jump E3-S2-2-4',
                //跳转到【2-2-4】S2-2-4
            },
        },},
    ],

     /**
	 * ====================================
	 *【2-2-3】S2-2-3
	 * ====================================
	 **/
    'E3-S2-2-3':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        //被抓，解锁举报选项
        {'Function':{
            'Apply': function () {
                monogatari.storage ({
                    E3_caught : true
                });
                return true;
            },

            'Reverse': function () {
                monogatari.storage ({
                    E3_caught : false
                });
            }   
        }},
        'show scene E3_dorm',
        'i 上次都没能跑成，现在到这种地方，想也知道只会更难了吧。',
        'show character a bored',
        'a 嗯……',
        'i 没关系，不用管我，你想走就走吧，我给你打掩护。',
        'a 好。',
        'show scene factory with fadeIn duration 3s',
        'play sound factory_bell',
        's 第二天晚上，如同你们听到的消息那样，去往食堂的巨大人流中突然有人大喊一声，',
        'play music E3_steampunk_cult with fade 7 loop volume 50',
        'show scene wall with fadeIn duration 1s',
        's 紧接着像是得到了什么信号一样，一大群人猛然转向，冲往了高墙边缘。',
        's 你有一瞬间也想跟上去，但最终你还是停下了脚步，开始在人流中大喊，试图让情况变得更加混乱。',
        'i 救命啊，有人挤我！',
        'i 逃跑了！有人跑了！',
        'show character h chat',
        'i 救救我！',
        's 你扑上去抓住一旁跑过的护卫队员的手臂。',
        'i 求你把我护送回去吧，我不想在这儿被人活活踩死！',
        'i （这样子……冈田应该能跑出去吧？）',
        'hide character h',
        's 大门处一片混乱，但你成功绕开墙穿回了厂区的小巷。你一边在内心暗自祈祷，一边往宿舍走去。',
        'play sound footsteps',
        'show scene E3_dorm with fadeIn duration 3s',
        'centered',
        'show character a bored',
        'centered',
        'i 你……你你你你没跑？',
        'a 我想了想还是算了，听说那批跑出去的被抓走了不少，待在这里至少我俩有个照应。',
        'play sound metal_bend',
        's 你正想说点什么，但一阵异样忽然涌上你的心头。',
        'i 呃……嗯？',
        'hide character a',
        's 你和冈田同时转头看向窗外。',
        's 不知什么时候，明亮的光芒将宿舍楼的影子烙印在地面上，而没有遮蔽的地方全部被变作炽白，滚滚热浪自窗外涌入。',
        'i 什么情况？',
        'show character a worried',
        'a ……新日超负荷了？',
        's 不等你们反应过来，明亮的光芒突然又黯淡了下去。',
        'i 那是什么声音？',
        'a 不好……我们得快跑！',
        'play sound footsteps',
        'show scene factory with fadeIn duration 1s',
        'gr 救命！',
        'show character lb fighting',
        'lb 啊啊啊啊！',
        'hide character lb',
        'show character gw normal',
        'gw 圣哉！圣哉！',
        'hide character gw',
        'show character lc fighting',
        'play sound knock_metal with loop',
        's 砰砰砰！',
        'stop sound knock_metal',
        'hide character lc',
        'show character h shooting',
        'play sound ding with loop',
        's 叮叮叮！',
        'stop sound ding',
        'show scene wall with fadeIn 1s',
        'play sound footsteps',
        's 混乱无法用语言形容，当你一路跌跌撞撞地冲到高墙脚下时，身上已经沾满了不知道是谁的血。',
        'play sound knock_metal',
        'i 开门啊！开门！有没有人！',
        's 你拼命捶打着高墙脚下严丝合缝的铸铁大门，希望有人回应，',
        's 可回答你的只有身后的呼啸的枪弹、哭喊和呼救声。',
        'i 该死……',
        'stop music E3_steampunk_cult with fade 7',
        's 你转过头，想和冈田商量一下对策，却发现他头颅低垂。',
        'show character a bored',
        'i 怎么啦？',
        'a s……',
        'i 你说什么？',
        'hide character a',
        'a s……',
        'i ……',
        'show image E3_gw_large',
        'a 圣哉！圣哉！圣哉！',
        's 一张被撕裂了一半，鲜血淋漓的扭曲面孔向你扑了过来。',
        'play sound ring_telegraph',
        'show scene #000000',
        'centered',
        'play sound notification',
        'show message Ending-E3high_wall',
        'end'
        //end【高墙】
    ],

    /**
	 * ====================================
	 *【2-2-4】S2-2-4
	 * ====================================
	 **/
    'E3-S2-2-4':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        //被抓，解锁举报选项
        {'Function':{
            'Apply': function () {
                monogatari.storage ({
                    E3_caught : true
                });
                return true;
            },

            'Reverse': function () {
                monogatari.storage ({
                    E3_caught : false
                });
            }   
        }},
        'show scene E3_dorm',
        'i 上次没能走成，这次人更多或许有机会。',
        'show character a taking_out_sth',
        'a 嗯。那一起走吧。',
        'i 好。',
        'show scene factory with fadeIn duration 3s',
        'play sound factory_bell',
        's 第二天晚上，如同你们听到的消息那样，去往食堂的巨大人流中突然有人大喊一声，',
        'play music E3_steampunk_cult with fade 7 loop volume 50',
        'show scene wall with fadeIn duration 1s',
        's 紧接着像是得到了什么信号一样，你和周围的一大片人猛然转向，冲往了高墙边缘。',
        'play sound footsteps',
        's 你一路狂奔，只听见身后有人大喊“逃跑了！”，还有人哭喊着拦住护卫队要求保护自己不被踩死，让情况更加混乱。',
        'i （天啊，我得再跑快点！）',
        'play sound ding with loop',
        'show character h shooting',
        's 叮叮叮！',
        'stop sound ding',
        'h 停下来！遵守工厂规定，否则我们将采取强制措施！',
        'hide character h',
        'play sound footsteps',
        's 你们不管不顾，一路冲到了高墙脚下，铸铁大门前的护卫队早已得到消息，厚重的大门缓缓关上。',
        'show character lc fighting',
        'lc 上啊！',
        'hide character lc',
        'show character lb fighting',
        'lb 别让他们把门关上！',
        'hide character lb',
        'play sound metal_bend',
        's 人群裹挟着你重重拍在了门上，你听见了齿轮不堪重负的呻吟，',
        'play sound door_slam',
        's 然后，大门轰然开启。',
        'show character lc fighting',
        'lc 冲冲冲！',
        'hide character lc',
        'show character lb fighting',
        'lb 啊啊啊啊啊！',
        'hide character lb',
        's 曾经看似无比威严的高墙，在人潮中似乎低矮了下去。',
        'show scene factory with fadeIn duration 3s',
        'play sound footsteps',
        's ……',
        's 你们涌出了高墙，冲进了新日下方的广场，然后一路向前，拥挤着越过了不知为何荒凉了很多的厂区道路，一路上有人掉队，也有人加入。',
        's 你们一路冲到工厂边缘的铁丝网下，一拥而上，一时间铁丝网上挂满了人。',
        'show character lc loaded',
        'lc 别压我！',
        'hide character lc',
        'show character lb whisper',
        'lb 老子被你们踩下去了！',
        'hide character lb',
        'show character lc loaded',
        'lc 我靠我靠！别上人！',
        'hide character lc',
        'show character lb whisper',
        'lb 你们给我让开，我要上去！',
        'show scene #000000',
        's ……',
        'play sound metal_bend',
        's 一片混乱中，铁丝网摇晃了一下，',
        'play sound door_slam',
        'show scene ice_night with fadeIn duration 3s',
        's 随即向后倒下。',
        's 人群立刻扑了上去，踏着被打开的缺口和其他人的血肉之躯蜂拥冲向外面冰原的寒风。',
        'i （终于逃出来了！）',
        'i （不知道冈田在哪里，刚刚和他冲散了……）',
        //ito：因为上条线跑得晚遇到扭曲了，感觉或许这条线也有扭曲比较自然？
        'show character gw normal',
        'gw 圣哉！圣哉！',
        'i ？！！！！！',
        'gw 圣哉！圣哉！',
        'i 完蛋了，好不容易才逃出来，偏偏——！',
        'hide character gw',
        'play sound footsteps',
        's 你头也不敢回地往前拼命跑着，在一望无际的纯白冰原上大口喘息着，',
        'stop music E3_steampunk_cult with fade 7',
        'play sound footsteps',
        's 在机械的不断向前的摆动中，你的腿变得无比沉重，可你不敢停下脚步。',
        's ……',
        'i （……诶？）',
        'i （怎么了，那些扭曲好像没有追上来？）',
        'play sound wind_winter',
        's 突然之间，你好像感受到了身后的异状。',
        's 新日的光芒突然变得无比炽烈，就算你已经跑出很远，背对着新日，也无法忍受。',
        's 你感觉到背后变得滚烫，影子被拉得很长，像是要烙印在地面上一般，周围的冰雪飞快融化，',
        's 但这一切转瞬即逝。',
        'show scene factory with fadeIn duration',
        's 你回过头，只见身后的厂区里，新日明亮的光线迅速黯淡，',
        'show scene #000000',
        's 很快化为一片昏黑。',
        'i ……',
        'i 发生……什么事了？',
        's ……',
        'play sound wind_winter',
        's 但四周没有声响，回答你的只有冰原上的风，与面前无尽的黑暗长路。',
        'play sound notification',
        'show message Ending-E3dark_night',
        'end'
        //end【黑夜茫然】
    ],
    /**
	 * ====================================
	 *【2-1】S2-1
	 * ====================================
	 **/
    'E3-S2-1':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        'show scene E3_dorm',
        'i 我想走，可是我走不了啊。',
        'show character a bored',
        'a 啊，你家里还需要能源，对吧……',
        'i 嗯……扭曲都这么多了，要不是为了能源，我也不想去上工啊。',
        'i 车间主任还管不管咱们死活？为什么工厂一直出现扭曲，可是一直没有停工检查？',
        'a 你以为你说的这些主任不知道吗？',
        'a 你想想，以前没闹过扭曲的时候，咱们背包里的能源量有多可怜？现在呢？',
        'a 所以哪怕顶着扭曲，他也要让咱们上——',
        'i 照你这么说，我们还得谢谢扭曲了，是不？',
        'show character a worried',
        'a 我也不是这个意思——',
        'i 要不是因为**的扭曲作怪，我爸的腿就不会那样，我家就不会那么缺能源！',
        'i 现在大家都在跑路，我呢？你以为我不想跑路吗？我跑了家里怎么办？全家等着能源枯竭饿死，还是等着被扭曲找上门生吞活剥？',
        'i 只有能源能抵抗扭曲，我得把能源送到家里啊！',
        'a ……',
        'hide character a',
        's 你俩都沉默了一阵。',
        'i 不好意思，刚才激动了……',
        'show character a worried',
        'a 没事，没怨你。你也没说错。',
        'a 听你的，不走。',
        'hide character a',
        's 冈田原本从工位上顺了把钳子，准备逃走的时候用上，现在你们又藏起了那把钳子，还是如同往常一样去上工。',
        'show scene factory with fadeIn duration 3s',
        'play sound factory_bell',
        's 你们刚走进车间，就响起了广播铃声。',
        's “各位奋战在新日工厂中的同志们，大家好，现在宣布一则新通知。”',
        's “近日我们接到报告称，冰原上的扭曲事件相比往日上升了2-3倍，同时由于各个城市适逢转型升级的关键时期，新日能源供应需求增大。”',
        's “因此工厂决定实行暂时性的隔离政策，严格控制工厂的人员出入，同时暂缓休假和返乡申请，全力攻坚，争取早日打赢新日能源供应战……”',
        'i （果然……没选择跑是对的，看守得这么严哪能跑得出去）',
        's ……',
        'play sound factory_bell',
        's 下班之后。',
        'show character a worried',
        'a 你听说了吗？',
        'i 什么？',
        'a 好像说早上有一些想逃跑的人被护卫队抓住了，送到了北边的厂区。',
        'i 北边？那里不是刚刚建成吗？',
        'a 应该是刚好就拿来当隔离的区域了。',
        'i 唉，幸好……',    
        'a 谁知道是幸运还是不幸呢。',
        'hide character a',
        's ……',
        'play music crowd with fade 3 loop',
        's 第二天，食堂里。',
        'stop music crowd with fade 3',
        'show character lc loaded',
        'lc 我听朋友说，昨天半夜又抓了一大批想跑的。',
        'hide character lc',
        'show character lb chat',
        'lb 唉，我原本也想跑，还好最后没走。',
        'hide character lb',
        'gr 啊啊啊！',
        's 食堂另一头的人群突然一阵骚动。',
        'show character a worried',
        'a 发生什么事了？',
        'i 不会是……',
        'hide character a',
        'gr 嘘！安静！',
        'gr 有人倒下了！',
        'gr 食物中毒吗？',
        'gr 不是扭曲，不是！别挤！',
        'gr 让开让开！',
        's ……',
        's ……',
        'play music crowd with fade 3 loop',
        's 食堂里人头攒动，你根本挤不过去，不知道究竟发生了什么。',
        'stop music crowd with fade 3',
        's ……',
        'jump E3-S2-1-1',
    ],

    'E3-S2-1-1':[
        /**
         * ====================================
         *【2-1-1】S2-1-1
        * ====================================
        **/
        {'Function':{
            'Apply': function () {
            setTextBoxCSS(textBoxE3);
            },
    
            'Reverse': function () {
            setTextBoxCSS(textBoxDefault);
            }   
        }},
        'show scene factory',
        's 接下来的日子里，你不再想逃走的事情，安安稳稳地待在自己的岗位上工作。',
        's 不断有新的传言在工人之中传播，还有更多的人被带走的消息。',
        'i （唉，日子越来越不安稳了）',
        'i （昨天还听说有个宿舍被扭曲屠了）',
        's ……',
        'play sound factory_bell',
        's 一天早上。',
        's “现在播报一则通知。”',
        's “由于新日更新工作时间紧任务重，出现人员缺口，现需招收一批熟练工接近新日核心进行更新和维修工作。”',
        's “请有意者请速至组长处报名。”',
        'i （新工作？）',
        'i （说起来自从进了工厂，一直都是在这里当流水线分拣员，还没有接触过核心的维修）',
        's 你想起前两天家里人发电报过来，说父亲的腿又开始疼了。',
        'play sound choices',
        //去跳转【2-1-2】不去跳转【2-1-3】
        //此处选择去并被选中过完剧情的才能在【2-1-4】中有进入新日维修的选项
        {'Choice':{
            'Dialog': 's 要报名成为新日核心维修员吗？',
            'no': {
                'Text': '要不算了',
                'Do': 'jump E3-S2-1-3',
                //跳转到【2-1-1】S2-1-1
            },
            'yes': {
                'Text': '还是报名试试看',
                'Do': 'jump E3-S2-1-2',
                //跳转到【2-2-1】S2-2-1
            },
        },},
    ],

     /**
	 * ====================================
	 *【2-1-2】
	 * ====================================
	 **/
    'E3-S2-1-2':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        'show scene factory',
        'i （要不去吧，去核心维修听起来就有更多的能源配额，可以都寄回家去，缓解一些燃眉之急）',
        's 你叹了口气，起身到组长处报了名。',
        's ……',
        //此处设置一个50%概率选择
        //ito：每次50%概率判定后，自动进其中一条支线，然后开始的时间线界面能不能自动把另一条支线变成可选的？因为我感觉如果让玩家回来反复刷这个点可能意义不大🤔
        //剧情解锁待补充
        {
			'Conditional': {
				'Condition': function(){
					const result = Math.random();
					if(result <= 0.5) {
						return 'selected';
					} else {
						return 'not_selected';
					}
				},
				'selected': 'jump E3-repair-selected',
				'not_selected': 'jump E3-repair-not-selected',
			}
		},
    ],

    'E3-repair-not-selected':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        //没选上的剧情
        's 虽然你表现得相当积极，但是却在众多的求职者中败下阵来。',
        'i （唉……算了，现在的配额也勉强够用，少买一点水果膏，多的寄回去吧）',
        'jump E3-S2-1-3',
        //跳转【2-1-3】
    ],
        
    'E3-repair-selected':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        //选上的剧情 w：组长
        {'Function':{
            'Apply': function () {
                monogatari.storage ({
                    E3_repair_selected : true
                });
                return true;
            },

            'Reverse': function () {
                monogatari.storage ({
                    E3_repair_selected : false
                });
            }   
        }},
        'show scene factory',
        's 第二天刚到厂房里，组长就拉着你到一张纸上打钩。',
        'grzz 好了，签好字到那边去，跟着护卫队的人走。',
        's 你跟在那一溜人身后，穿过巨大的厂区，向新日脚下走去。',
        //新日背景
        'play music E3_steel with loop fade 7 volume 50',
        's 高耸的新日屹立在数十米高处，无时无刻地发出炽烈的光芒，新日脚下，开阔的广场上，一人高的管道宛若血管般汇聚而来，燃料与能源在管线中流淌，蒸汽在闸门中低吟',
        'show character h chat',
        'h 戴上墨镜，穿好工作服！新日的温度不是你们能承受的！',
        'hide character h',
        'i （好重啊……）',
        's 按照护卫队的指示，你们换上了沉重的工作服，将一整块漆黑的镜片扣在脸上。经过简单的培训之后，你们被要求直接前往新日脚下。',
        's 跨过广场的四分之一时，你便感觉到了热浪，漆黑的面罩变得透明起来。',
        'i 幸好有防护服，不然我怕是被烤焦了。',
        's 你们来到新日脚下，只见眼前布满扭曲变形的外壳零件，在新日的高温下，一切都变得柔软。',
        //ito：二周目看到这笑得不能自已⬆️😂
        'show character h chat',
        'h 你们要做的事情就是把这些零件替换上去，换下来的部分运到广场外面，会有人来回收。',
        'hide character h',
        'i 原来我们平时拣选的零件就是这么来的。',
        'i 我去好烫！',
        's 就算隔着厚厚的手套，你依然感觉到了触碰的零件的温度。',
        'i 啊……好辛苦，还不如坐着打螺丝呢……',
        'show character h chat',
        'h 动作快点！你们已经慢了！',
        'i （烦死了，我都还没熟悉工作方法！）',
        'hide character h',
        'stop music E3_steel with fade 7',
        's ……',
        's 接下来的三天，你都在这种高温的环境下工作。',
        's 好在虽然环境恶劣，但餐标也提升了很多，无论是肉类还是很少能看见的果汁和绿豆粥，你每一顿都能吃到。',
        's 正当你逐渐熟练这份工作时，却被突然告知你们的临时抽调结束了，第二天起返回原岗位。',
        'i 太可惜了，我还没吃够呢……',
        //宿舍背景
        'play sound footsteps',
        'show scene E3_dorm with fadeIn duration 3s',
        'show character a bored',
        'a 回来啦？',
        'a 看你前两天早出晚归，累得半死倒头就睡，我都说不上几句话。',
        'i 我带回来的果汁和绿豆汤你倒是一次没少吃啊。',
        'a 今天就结束了？',
        'i 是啊，最后的苹果了，吃完就没了。',
        's 冈田接过带着大块青绿色的苹果，咬了一大口。',
        'show character a happy',
        'a 下次请你抽烟草油膏。',
        'i 免了吧，我闻不惯那个味道。',
        'show character a worried',
        'a 唉，也不知道什么时候才能攒够钱，就近买套有新日光照的房子，把家里人接过来。',
        'i 你家里人不会舍不得老家吗？',
        'show character a bored',
        'a 有啥办法呢，我又顾不到两头，况且那么远那么暗的地方，有什么好的。',
        'i 也是。',
        's ……',
        'jump E3-S2-1-3',
        //跳转到【2-1-3】S2-1-3
    ],

     /**
	 * ====================================
	 *【2-1-3】S2-1-3
	 * ====================================
	 **/
    'E3-S2-1-3':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        'show scene factory with fadeIn duration 3s',
        's 日子就这么一天天过去，而情况愈加紧缩。',
        's 你听说厂区已经完全停止内外沟通，就连食材都是卸在门外然后让工人搬运进来。',
        's 你还听说有人成功逃离，护卫队在冰原上追了好几公里，但更多试图逃离的人还是被抓到了北区，再也没有出来，新来的工人补上了他们的缺口。',
        'i 日子越来越不太平啊。',
        'show character a worried',
        'a 是啊，我家里那边也说，他们被一个扭曲砸门，好在被及时解决了。',
        'i 我家里倒是还好。',
        'a 唉……',
        'i 唉……',
        'hide character a',
        's 你们正唉声叹气，食堂另一头忽然传来骚动。',
        'gr 干什么干什么！',
        'gr 别动手！护卫队，护卫队在哪里！',
        'show character h chat',
        'h 怎么回事！',
        'play sound footsteps',
        's 一名护卫队成员提着齿轮枪匆匆赶来。',
        'gr 妈的老子要出去！',
        's 金属饭盆被扣在了护卫队的脸上，引发了新一轮的骚动。',
        'hide character h',
        's ……',
        's 后面的事情你没有看到，人群挡住了你的视线。',
        's 当天的上工时间推后了十分钟，听说最后闹事的人被护卫队抓走了，两个人都满身汤水。',
        's ……',
        //跳转【2-1-4】
        'jump E3-S2-1-4',
        //跳转到【2-1-4】S2-1-4
    ],

     /**
	 * ====================================
	 *【2-1-4】S2-2-4
	 * ====================================
	 **/
    'E3-S2-1-4':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        'play sound factory_bell',
        's 又一天早晨。',
        's “现在播报一则通知。”',
        's “由于新日更新时间紧任务重，出现人员缺口，现招收一批熟练工进行新日内部通道的维修更新工作。”',
        's “有新日维修经验者速到组长处报名。”',
        'i （怎么回事，最近这样的招人通知越来越多了）',
        'i （家里给爸治病还得要钱，唉……）',
        //此处玩家如果未经历过经历过【2-1-2】剧情则没有报名选项
        {
			'Conditional': {
				'Condition': function(){
					if(E3_repair_selected = true) {
						return 'selected2';
					} else {
						return 'not_selected2';
					}
				},
				'selected2': 'jump E3-repair-selected-2',
				'not_selected2': 'jump E3-repair-not-selected-2',
			}
		},
    ],

    'E3-repair-not-selected-2':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        'i （但是他说要有维修经验，上一次没去，这次肯定没我份了……）',
        'i （唉……）',
        'jump E3-S4-1',
    ],

    'E3-repair-selected-2':[
        'play sound choices',
        {'Choice':{
            'Dialog': 's 要报名成为新日内部维修员吗？',
            'no': {
                'Text': '这次要不算了',
                'Do': 'jump E3-repair-selected-2-notgo',
                //跳转到【2-1-1】S2-1-1
            },
            'yes': {
                'Text': '还是报名试试看',
                'Do': 'jump E3-repair-selected-2-go',
                //跳转到【2-2-1】S2-2-1
            },
        },},
    ],

    'E3-repair-selected-2-notgo':[
        //玩家经历过【2-1-2】剧情
        //选择不报名
        'i （感觉会很危险，上次都那么热了，为了这些钱丢掉命不值得）',
        //跳转到【4-1】S4-1
        'jump E3-S4-1',
    ],

    'E3-repair-selected-2-go': [
        //选择报名
        'i （虽然听起来很危险，但是为了配额，拼了！）',
        's 你立刻向组长报名。',
        's 不知道是不是因为这份工作太过危险，报名的人很少，你顺利得到了这个岗位。',
        'jump E3-S3-1',
        //跳转到【3-1】S3-1
    ],

    /**
	 * ====================================
	 *【3-1】S3-1
	 * ====================================
	 **/
    'E3-S3-1':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        //参与过这段剧情的才能开启【5-3-1】获取热源的选项
        {'Function':{
            'Apply': function () {
                monogatari.storage ({
                    E3_repair_selected_2 : true
                });
                return true;
            },

            'Reverse': function () {
                monogatari.storage ({
                    E3_repair_selected_2 : false
                });
            }   
        }},
        'show scene factory',
        's 报名通过后，你和其他人被一起带到一个新的厂房，在其中接受了训练。',
        's 很显然这份工作的要求与此前不是一个档次的，期间甚至淘汰了不少人。',
        's 三天的特训后，你们被套上更加厚重的防护服，派往新日内部。',
        'i 好热啊。',
        'gr 是啊……不知道防护服里的水够不够。',
        's 你用力吸了口开始变得温热的冰水，领着你的小队走进了新日底部的通道。',
        //切换甬道背景
        'show scene #000000',
        'play music E3_peaceful_industry with loop fade 7 volume 50',
        'i ……',
        'show scene inside with fadeIn duration 3s',
        's 热浪扑面而来，在你的玻璃面罩上留下一层雾气，你抹掉滑落的水滴，在布满蒸汽管道的甬道里前进。',
        's “嘶嘶嘶……”',
        's “咔哒咔哒……”',
        's “噗噗噗……”',
        'i （听起来……不太妙啊）',
        's 蒸汽在铜管中流淌，本该发出流畅的低吟，但此时你听到的却是杂乱嘶哑的音调。',
        'gr 队长，我们刚刚检查了周围的状况，应该是上一队才维修过，还很完好。',
        'i 继续前进。',
        's 新日内部的甬道错综复杂，暴虐的日光自管线的缝隙间洒落，四周一片昏黄，随着新日功率的变化而闪烁。',
        's 你来到了岔路口前方，分叉处的墙面上钉着金属的立牌，显示着上次进入甬道的时间。',
        's 你拧转齿轮，让黄铜号码盘变为今天的日期，然后继续深入。',
        'i （好热，手臂上的温度计已经快爆表了……）',
        'gr 队长，防护服里填充的冰水还够行动五十五分钟。',
        'i （我连五分钟都撑不下去！）',
        'i 清点零件，这里有损伤，开始维修。',
        'gr 是！',
        'play sound knock_metal',
        's 你们在一面墙前停下，笨拙地弯下腰打开一路拖着的工具箱，将制式的管道与齿轮取出。',
        's 灼热的甬道里，就连金属的齿轮都开始软化，你们必须接上便携控制台切断这面墙的蒸汽供应，快速换下那些报废的零件。',
        's 部分零件早已变形，你们要点燃喷枪，将其烤软。',
        's 灼热的气流涌入鼻腔，让你几乎窒息。',
        'show scene #000000',
        's ……',
        'show scene inside with fadeIn duration 3s',
        'i 维修完成，下一组！',
        'gr 对时！还能行动四十三分钟！',
        's ……',
        'i 好了，下一组。',
        'gr 对时！三十分钟！',
        's ……',
        'i 继续！',
        'gr 二十二分钟！',
        's ……',
        'i （好热……）',
        'i （冰水都热了……）',
        's 你咬着吸管，感觉到铁壶里开始烫嘴的水散发着一股铁锈味。',
        'i （幸好没有走很深，很快就能出去）',
        's 你们路过一个岔道，你听到其中传来一连串尖锐的呼啸声。',
        'i （要不修完这里就走吧）',
        'gr 对时……十六分钟！',
        'stop music E3_peaceful_industry with fade 7',
        'i （时间好像不多了……）',
        'play sound choices',
        //选项去和不去
        {'Choice':{
            'Dialog': 's 要去通道里维修吗？',

            'no': {
                'Text': '算了，不去了',
                'Do': 'jump E3-S3-1-1',
                //跳转到【3-1-1】S3-1-1
            },
            'yes': {
                'Text': '去吧，多一份工钱',
                'Do': 'jump E3-S3-1-2',
                //跳转到【3-1-2】S3-1-2
            },
        },},
    ],

    /**
	 * ====================================
	 *【3-1】S3-1-2
	 * ====================================
	 **/
    'E3-S3-1-2':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        //去
        'i （维修是记次数的，多修一个地方就有多一份配额，去吧，实在不行就走）',
        'i 跟上，最后一次工作。',
        'gr 是！',
        'centered',
        'show scene #000000',
        'centered',
        'show scene inside2 with fadeIn duration 3s',
        'centered',
        'play sound metal_bend',
        's 你们迈入了甬道，几乎是立刻，你就感觉到了不对劲。',
        's 这条甬道内的管道与齿轮结构格外混乱，完全不像手册上的描述，同时，光芒不断闪烁，说明这段甬道的工作状态很不稳定。',
        'i （这是哪支队伍搞的维修，回去肯定要狠狠告状！）',
        's 你拖着沉重的脚步来到甬道中间，打开了工具箱。',
        'play sound knock_metal',
        's “当啷！”',
        's 扳手从你疲惫的指间滑落，你赶忙蹲下身去捡拾。',
        'play sound door_slam',
        's “砰！”',
        's 你碰掉了一块凸起的透明盖板，露出后面半融化的机械结构。',
        's 那两枚旋转的齿轮，以及下方横向排布的一连串宛若锯片的小齿轮让你感觉无比眼熟。',
        'play sound ding',
        's “当！”',
        's 那一串小齿轮旋转起来，变成两组上下分开，然后用力撞在一起，火花四溅。',
        'i （这是什么声音？）',
        's 你俯下身，凑近那些齿轮。',
        's “嘶嘶嘶……”',
        'i （蒸汽的声音怎么这么奇怪？）',
        's “僧在……”',
        'i ？？？？？？',
        'play music E3_steel with loop volume 50',
        'show image E3_gw_large',
        's “圣哉！”',
        'i 啊啊啊啊！',
        'hide image E3_gw_large',
        'play sound door_slam',
        's 你猛然坐倒在地，而后，明悟涌上心头。',
        's 那齿轮的形状与诡异的扭曲轮廓，根本不是什么配件，而是一张熔化的扭曲面孔！',
        's 你挣扎着转过身体，环顾四周，那些扭曲的齿轮，那些奇怪的轮廓。',
        's 分明是一个个人形，是被嵌入墙中的扭曲！',
        's 它们与管道融为一体，蒸汽在体内流淌，共同维持着新日的运转！',
        's 这条甬道，根本就是扭曲堆成的！',
        'i 跑！！！！',
        'i 快跑！！！',
        's 你不顾一切地嘶吼，站起身想要离开，',
        'stop music E3_steel with fade 7',
        's 却对上了其他人恐惧的眼神。',
        'gr ……',
        's 你这才发现，他们的下半身不知何时已经长出了扭曲的齿轮与铜管，与四周的零件逐渐融合。',
        'i 原来不是我累了……',
        'show scene #000000',
        's 而是你在踏入这里的时候就开始了向着扭曲的转化。',
        'play music E3_a_cut_in_love',
        's 一瞬间，你明白了一切。',
        's 为什么维修新日的人只值一班就要轮换，',
        's 为什么一直招人人手却从来不够，',
        's 那些新来的人究竟是补了谁的空缺。',
        's “喀哒喀哒喀哒……”',
        'centered',
        'show image E3_cg1-1 with fadeIn duration 3s',
        'gallery unlock E3_cg1-1',
        'centered',
        'play sound notification',
        'show message E3_cgunlock1-1',
        's 新日的光芒骤然明亮，自缝隙间照亮来自整条甬道。',
        's 嵌入墙内的扭曲开合着口腔，赞颂声在蒸汽中流淌。',
        's 你看见身上的防护服落下，在地面上化作铁水；',
        's 你看见你的皮肤脱落，下方的肌肉暴露出金属的色泽。',
        's 炽烈的闪光过后，原地只剩下几座半融化的雕像，手臂向外延展出不明的片状结构，仿佛残缺的羽翼。',
        's 又是几次闪烁，宛若定格动画一般，雕像慢慢靠向了墙壁……',
        'centered',
        'show scene #FFFFFF with fadeIn duration 7s',
        'play sound ring_telegraph',
        'centered',
        'show image E3_cg1-2 with fadeIn duration 3s',
        'gallery unlock E3_cg1-2',
        'centered',
        'play sound notification',
        'show message E3_cgunlock1-2',
        'centered',
        'play sound notification',
        'show message Ending-E3icarus',
        'end'
        //【BE伊卡洛斯】
    ],
    
    /**
	 * ====================================
	 *【3-1-1】S3-1-1
	 * ====================================
	 **/
    'E3-S3-1-1':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        //选择跑
        'i （时间已经不够了，这种声音肯定不是我们能处理的）',
        'i 记录故障位置，我们离开这里。',
        'gr 是。',
        's 拖着沉重的设备和防护服，你们尽可能快地穿梭在甬道之间。',
        'show scene #00000',
        's ……',
        //此处给一个50%概率判定，50%可能跳转【BE 化身扭曲】BE Change，50%可能逃出去
        {
			'Conditional': {
				'Condition': function(){
					const result = Math.random();
					if(result <= 0.5) {
						return 'escape';
					} else {
						return 'not_escape';
					}
				},
				'escape': 'jump E3-repair-escape',
				'not_escape': 'jump E3-repair-not-escape',
			}
		},
    ],
    
    'E3-repair-escape':[
        {'Function':{
            'Apply': function () {
              setTextBoxCSS(textBoxE3);
            },
      
            'Reverse': function () {
              setTextBoxCSS(textBoxDefault);
            }   
        }},
        //逃出剧情
        'show scene factory with fadeIn duration 3s',
        'centered',
        's 疲惫渗入每一块肌肉，但在热浪将你们融化之前，你们踏上了广场坚实的土地。',
        's 清凉的空气涌入鼻腔，防护服自动开启，冒着热气的冷却水在地上流淌，又于新日的光芒下蒸发。',
        'h 赶紧过来，又有一支队伍回来了！',
        'h 解除防护服，盐水和冰块拿过来！',
        's 你疲惫地倒在地上，任由其他人拖曳着自己，脑中想的却是那份还未到手的配额。',
        'show scene #000000',
        's ……',
        //跳转到【4-1】S4-1
        'jump E3-S4-1',
    ],

    'E3-repair-not-escape':[
        'jump E3-BEchange',
    ],
    })