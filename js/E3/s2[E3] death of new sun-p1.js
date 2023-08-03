/**
 * =======================================
 * S2剧情：		    新日之暗（part1）
 * 文件名：			death of new sun p1
 * 创建日期：		2023-02-19
 * 时间线索引：		【0】&【1-1】&【1-2】&【1-3】&【2-1】&【2-2】&【2-2-1】
 * 写手：			虚渊
 * 程序演绎：		栗子
 * 更新：
 * 20230728        【栗子】完成；需要补充bgm和音效，cg
 *
 * =======================================
 */

/**
*索引：
*   i = 我 ， s = 旁白 ， pm = 屏幕 ， zg = 长官 
*   a = 冈田 ， h = 护卫队员 ， gw = 怪物 ， l = 龙套工人
*   la = 龙套工人a（藤本） ， lb = 龙套工人b（藤原），lc = 龙套工人c， r = 路人， b = 大伯
*/
// Define the messages used in the game.
monogatari.action ('message').messages ({
    // 结局弹窗
    'Ending-E3BE': {
      title: '结局：日之蚀',
      subtitle: '',
      body: `
        <p></p>
        <img src='./assets/gallery/E6_end_brick.png' width="40">
  
      `
  },
  
    'Ending-cdfz': {
        title: '结局：重蹈覆辙',
        subtitle: '命运给了你第二次机会，但你还是没能逃出帝国写给你的终局。',
        body: `
          <p>（如果能再来一次的话……点击主菜单“故事线”重新从前一节点开始）</p>
          <img src='./assets/gallery/E6_end_brick.png' width="40">
  
        `
    },
  
    'Ending-fblbhz': {
      title: '结局：非暴力不合作',
      subtitle: '拒绝是你最后的尊严。',
      body: `
        <p>你成功摆脱了繁文缛节的束缚。然而，宫中其余的姐妹们又命运如何呢？她们并不一定都能如你一般超然物外，最终脱离苦海。</p>
        <p>（如果能再来一次的话……点击主菜单“故事线”重新从前一节点开始）</p>
        <img src='./assets/gallery/E6_end_hermit.png' width="40">
  
      `
    },
  
    'Ending-E6true': {
      title: '结局：火烧太监所',
      subtitle: '野火烧不尽，春风吹又生。',
      body: `
        <p>那宫墙依旧森然矗立，可你们却在其中建立了一方自由的天地。或许有一天，你们也能够改变整个帝国的命数。</p>
        <img src='./assets/gallery/E6_end_fire.png' width="40">
  
      `
    },
  
    // 画廊解锁弹窗
    'E6_cgunlock_night_posters': {
      title: '解锁画廊：青瓦墙，朱字纸',
      subtitle: '',
      body: `
        <p>即便是最不起眼的青色宫墙也目睹过最凄切的哀伤。而今夜，你们决定以血和泪的控诉装点它。</p>
  
      `
    },
  
    'E6_cgunlock_riot': {
      title: '解锁画廊：宫妃起义',
      subtitle: '',
      body: `
        <p>你们的声音积沙成塔，聚水为流，最终汇成一句话：起来，不愿受压迫的姐妹们！</p>
  
      `
    },
  
    'E6_cgunlock_set_fire': {
      title: '解锁画廊：火烧太监所',
      subtitle: '',
      body: `
        <p>大火烧尽的是太监所的贞洁字纸，点燃的却是你们渴望的心。</p>
  
      `
    },
  }),

// Define the images used in the game.
monogatari.assets ('images', {
    'set_fire': 'E6_cg_set_fire.png',
    'riot': 'E6_cg_riot.jpg',
    'night_posters': 'E6_cg_night_posters.jpg',
    
});
  
// Define the gallery.
monogatari.assets ('gallery', {
    'E6_cg_night_posters': 'E6_cg_night_posters.jpg',
    'E6_cg_set_fire': 'E6_cg_set_fire.png',
    'E6_cg_riot': 'E6_cg_riot.jpg',
});

monogatari.assets ('scenes', {
  'factory': 'E3_factory.png',
  'E3_dorm': 'E3_dorm.png',
  'corridor_day': 'E3_corridor_day.png',
  'corridor_night': 'E3_corridor_night.png',
  'ice_day': 'E3_ice_day.png',
  'ice_night': 'E3_ice_night.png',
  'inside': 'E3_inside.png',
  'inside2': 'E3_inside2.png',
  'village': 'E3_village.png',
  'wall': 'E3_wall.png',
}),

// Define the Characters
monogatari.characters ({
    'a': {
        name: '冈田',
        color: '#00A88A',
        directory:'E3',
        sprites:{
            'bored':'a_bored.png',
            'happy':'a_happy.png',
            'taking_out_sth':'a_taking_out_sth.png',
            'worried':'a_worried.png',
        },
    },
    'h': {
        name: '护卫队员',
        color: '#00A88A',
        directory:'E3',
        sprites:{
            'chat':'jya_chat.png',
            'shooting':'jya_shooting.png',
        },
    },

    'l': {
        name: '工人',
        color: '#00A88A',
    },

    'la': {
        name: '工人a',
        color: '#00A88A',
        directory:'E3',
        sprites:{
            'sigh':'la_sigh.png',
            'smoking':'la_smoking.png',
        },
    },
    'lb': {
        name: '工人b',
        color: '#00A88A',
        directory:'E3',
        sprites:{
            'chat':'lb_chat.png',
            'fighting':'lb_fighting.png',
            'whisper':'lb_whisper.png',
        },
    },
    'lc': {
        name: '工人c',
        color: '#00A88A',
        directory:'E3',
        sprites:{
            'fighting':'lc_fighting.png',
            'loaded':'lc_loaded.png',
        },
    },
    'gw': {
        name: '怪物',
        color: '#00A88A',
        directory:'E3',
        sprites:{
            'normal':'gw.png',
        },
    },
});

monogatari.script({
    /**
	 * ====================================
	 *【0】S0
	 * ====================================
	 **/
    'S0':[
        'stop music',
        'show scene dorm with fadeIn duration 3s',
        's 这些天待在宿舍里，不知为何你有些头晕',
        's 或许是因为这些天做作业太过疲惫了吧，你这么想着',
        's 于是你爬上床，脱掉外衣',
        'show scene #000000',
        's 你闭上眼，陷入了沉眠，在梦境的深处，黑暗幻化出了色彩——',
        //ito：之后转写的时候记得把全角单符号替换为半角符号，像这样：' ',
        //宿舍背景
        'show scene E3_dorm with fadeIn duration 3s',
        's 你在房间里醒来，喝光了最后的饮用水，珍而重之地将最后一点饼干屑舔干净，然后，拿起齿轮枪走出门。',
        //背景换成走廊
        'show scene corridor_day with fadeIn duration 3s',
        's 门外一片寂静，新日的光从走廊涂黑窗户的裂隙中透入，但是没有人去修补。',
        's 你手握齿轮枪，蹑手蹑脚地经过走廊中的一扇扇房门，',
        's 楼梯间就在前方，只要到了那里，你就能得到补给。',
        's 你咽了口唾沫，感受到肠胃在欢欣鼓舞地蠕动，',
        's 你路过了一扇打开的门，里面空无一人，地上仅有一滩血迹。',
        's 突然，你感觉到了一丝不安，你注意到裂缝中新日的光消失了。',
        //紧张的BGM
        's 下一刻，走廊中紧闭的房门一扇扇打开，',
        //插入砰，砰，砰的开门声，切换成门开启的cg
        's 你看到了门内的东西。',
        
        //BGM骤然消失
        //【BE】日之蚀
        'stop music',
        'play sound notification',
        'show message Ending-E3BE',
        'center',
        'jump E3-S1-1',
        //跳转到【1-1】S1-1
    ],

    /**
	 * ====================================
	 *【1-1】S1-1
	 * ====================================
	 **/
    'E3-S1-1':[
        'show scene E3_dorm with fadeIn duration 3s',
        's 你睁开眼，窗帘已经被冈田拉开，明亮的新日之光照了进来。',
        'a 起床了！再晚就该赶不上工厂的早饭时间了。',
        'i 马上就好。',
        'show scene corridor_day with fadeIn duration 3s',
        's 你快速收拾好自己，穿上工装裤走出房间，却突然听见一声惨叫。',
        'l 啊啊啊啊啊！',
        'i 怎么回事？',
        'i 谁在叫？',
        'show character a worried',
        'a 不会是那个吧……',
        'hide character a',
        's 一扇紧闭的宿舍门砰的一声打开，一个满身是血的人摔了出来。',
        'l 救救我！救救我！',
        'show character gw normal',
        'gw 格喀喀喀……我……啊啊啊……',
        's 扭曲的人形踏着漫出的血液出现在了走廊上，它的皮肤垂落下来，扭曲的金属棘刺与齿轮暴露在体表，鲜血从它的身体上滴落，脊椎上竖起的弯管喷出蒸汽。',
        's 怪物嘶哑地呐喊，口中八音盒般的构造发出空灵的乐音。',
        'gw 圣哉！圣哉！',
        'gw 圣哉！圣哉！赞美太阳！',
        'gw 圣哉！圣哉！',
        //可以的话做个随机函数，随机输出圣哉和赞美太阳
        'l 是扭曲！有人扭曲了！',
        //插入杂乱的脚步声
        'play sound footsteps',
        'l 快跑！',
        'l 护卫队在哪里！',
        'show character a worried',
        'a 喂！快跑啊！',
        'hide character a',
        's 冈田的拉扯下，你猛然清醒过来，随着人群挤向远离怪物的地方。',
        'show character gw normal',
        's 怪物蹒跚着冲向了倒地的人，裂开的大口中锋利的齿轮开始旋转。',
        'hide character gw',
        'l 啊啊啊啊啊啊！',
        'show character gw normal',
        's 叮！',
        //可以的话配个音
        's 一根钢钎带着蒸汽插入了怪物的喉咙',
        'gw 圣哉……圣……太阳！……嘎嘎嘎……',
        'hide character gw',
        'show character h shooting',
        's 人群自动让开道路，身披黑袍的护卫队员穿过走廊，对着怪物抬起了枪口。',
        's 叮叮叮叮叮叮！',
        's 齿轮枪连续击发，数十根钢钎插入怪物的躯体，卡死了体表各处咬合的齿轮。',
        'hide character h',
        'show character gw normal',
        'gw 圣！……圣……嘶嘶嘶……',
        's 怪物的胸腔中喷出蒸汽，倒在了地上，滚烫的温度蒸发了血水，散发出浓重的腥味。',
        'hide character gw',
        'show charcter h chat',
        'h 怪物已经被消灭，你们安全了。',
        'h 现在请保持秩序，开始今天的工作。',
        'hide character h',
        's 你松了一口气。',
        'show character a worried',
        'a 太危险了……没想到新日旁边也会有人扭曲。',
        'a 但是话说回来，你刚刚好险啊，万一被抓住就完蛋了。',
        'i 我只是有点蒙，第一次这么近距离看到……',
        'a 唉，我倒是见过好几次，在老家的时候。',
        'a 要不我教你几招吧，到时候万一碰上了至少能防身。',
        'i 好啊，不过还是先想办法搞定今天的工作配额吧。',
        'show scene #000000',
        's 你和冈田走出宿舍楼，步入了灿烂的日光里。',
        'show scene factory with fadeIn duration 3s',
        's 漆黑的天穹下，层层高楼与烟囱之后，庞大的新日傲然矗立，无时无刻在产出着庞大的能量，温暖整个陷入黑暗的世界。',
        //插入厂区背景
        'centered',
        'i There is only the Sun, and it is our shield and protector. 唯赖新日，苍生倚庇。',
        'i There is only the Sun, and it is our shield and protector. 唯赖新日，苍生倚庇。',
        //这里排成上面英文下面中文的两行一起显示（一点个人趣味，不行的话就只留下中文）
        'play music crowd',
        's 你和冈田念诵完祷词，走入拥挤的食堂争抢早饭。',
        's ……',
        'show scene E3_dorm with fadeIn duration 3s',
        's 一整天单调且繁重的工作结束了。你带着一身的疲惫回到宿舍，很快陷入了睡眠。',
        'show scene #000000',
        's ……',
        'jump E3-S1-2'
        //跳转到【1-2】S1-2
    ],
    /**
	 * ====================================
	 *【1-2】S1-2
	 * ====================================
	 **/
    'E3-S1-2':[
        'show scene factory with fadeIn duration 3s',
        'play music crowd',
        's 第二天，你开始重复和昨天一样一成不变的日程。但在食堂吃早饭的时候，你无意间听到隔壁桌的窃窃私语。',
        'show character la smoking',
        'la 老弟，哥跟你说个厉害的。想听不？',
        'hide character la',
        'show character lb chat',
        'lb 有话快说？',
        'hide character lb',
        'show character la smoking',
        'la 分我点水果膏就告诉你，保证劲爆。',
        'hide character la',
        'show character lb chat',
        'lb ……没兴趣。',
        'hide character lb',
        'show character la sigh',
        'la 嘁，你这人咋这么没劲？真不想知道？',
        'hide character la',
        'show character lb chat',
        'lb 你是闲的？我还忙着准备上工呢。',
        'hide character lb',
        'show character la sigh',
        'la 得得，这次我就免费透露给你啊。',
        'show character la smoking',
        'la 就是我那搞统计的哥们儿。这两天他们统计结果算出来了，说咱们厂区的扭曲，比例远远高于市区。你知不知道这是什么意思？',
        'hide character la',
        'show character lb chat',
        'lb 哦？好家伙，你哥们儿大数学家呀？',
        'hide character lb',
        'show character la smoking',
        'la 你哥我的朋友，哪个不是精英分子？',
        'show character la sigh',
        'la ……啧，但你没听懂我的意思。我意思是，咱们厂区里的人更容易扭曲。',
        'hide character la',
        'show character lb chat',
        'lb 可吹吧你。扭曲，那是永夜的诅咒！咱上工整天晒着新日，还能比夜里那帮人更容易扭？你那大数学家，数学到底行不行？',
        'hide character lb',
        'show character la sigh',
        'la 那可是数据！你不信？行，那别管数据！就说咱自己看过的吧。',
        'la 我自打进了厂，就已经跟三个扭曲打过照面，有回甚至差点丢了小命。你呢？你也见过好几回吧？你在老家那边，有过这种情况么？',
        'hide character la',
        'show character lb chat',
        'lb ……倒也是。你这么一说——',
        'hide character lb',
        's 你还想接着听下去，那两个人却已经收拾起餐具离开了座位。',
        'i 他们说的是真的吗……',
        'play sound factory_bell',
        's 你没有时间仔细思考，因为很快车间里就打起了上工的铃声。',
        's 你来到属于你的位置上，传送带源源不断地将新日上拆换下来的老旧零件堆到你的面前。',
        's 在这条流水线上，你的职责是快速辨别出零件的损毁等级，不能使用的丢到一旁准备集中销毁，还能用的放到另一条传送带上，重复的工作每一小时五十分钟才有一次短暂的休息。',
        's ……',
        'play sound factory_bell',
        's 将近两小时的不间断分拣后，休息铃总算敲响。你早已腰酸背痛，瘫坐在废件堆旁的椅子上。',
        's 你之前在食堂见过的老工人也正在歇息，他正仰头看着新日，见到你点了点头。',
        'show character la smoking',
        'la 累是累了点，但搞出了新日那么大个家伙还真是挺自豪的。是咱们每天好生维修，新日才能正常运作！要我说，离了咱们，全城人民可都活不下去。',
        'hide character la',
        'i 是啊。咱可也指着新日吃饭呢。',
        'show character la sigh',
        'la 那可不！多亏了新日，现在我能买上烟草味油膏了。',
        'show character la smoking',
        'la 你看看这，油膏，这可是烟草味儿的，靓吧？100日能，统共这么一小罐！但是真香啊，快活赛神仙。新日，respect！',
        'hide character la',
        'show character lb chat',
        'lb 你这老家伙还真是，离开这两口就活不下去啊。',
        'hide character lb',
        'show character la sigh',
        'la 唉，可惜不够抽，又不能多买。这个月也就能再抽这么一小罐了，多的能量配额我得转回家里去。',
        'la 咱指着新日吃饭，家里老少五口也指着我吃饭呢。这个月发的800日能，转回去八成，钱包又该见底了。哎，养家不易哦……',
        'hide character la',
        'i （虽然但是，大哥那你少抽点啊？）',
        //厂区的铃声
        'play sound factory_bell',
        's 你还想再问点什么，但铃声很快就打断了你的话头。你们只得又一次回到自己的岗位上继续工作。',
        'show scene #000000',
        'jump E3-S1-3'
        //跳转到【1-3】S1-3
    ],

     /**
	 * ====================================
	 *【1-3】S1-3
	 * ====================================
	 **/
    'E3-S1-3':[
        's ……',
        'show scene E3_dorm with fadeIn duration 3s',
        's 又一次结束了一天的工作，你拖着疲惫的步伐回到宿舍，很快就进入了梦乡。',
        'show scene #000000',
        's ……',
        //宿舍背景
        'show scene E3_dorm with fadeIn duration 3s',
        's 但或许是晚上食堂的菜太咸了，你很快就被尿憋醒。你不情不愿地从床上起身，准备去厕所。',
        //太咸了所以水喝多了？
        'i 冷死了……',
        'show scene corridor_night with fadeIn duration 3s',
        's 你打开房门，披着大衣穿过走廊。走廊的尽头，新日永不消失的光芒隐隐透过窗户照射进来。',
        //走廊背景
        'show character la smoking',
        'la 嘶……',
        'hide character la',
        'i 谁？',
        's 你注意到窗下的阴影中蜷缩着一个人影，他低头扶着墙壁，不知在干什么。',
        'i 你还好吗？',
        'show character la smoking',
        'la 咱……',
        'hide character la',
        'i 怎么了？',
        's 你伸出手，扶住了他坚实的肩膀，想拉他起来，但他却先你一步抬起了头。',
        //插入怪物立绘，紧张的BGM
        'show character gw normal',
        's 血与牙齿从他口中落下，为新生的染血齿轮让位，眼球垂落在面颊下，两盏发光的大灯从眼洞中挤出。',
        's 它抓住你的手，崩裂了残余的皮肤。',
        'gw 圣哉！圣哉！赞美太阳！',
        'i 啊啊啊啊啊啊！',
        'i 救命啊救命啊！',
        'hide character gw',
        's 你用尽全力将手从它的铁掌中扯出，转身狂奔，灼热的蒸汽与狂热的赞颂紧贴在你的背后，',
        's 你从未觉得这条走廊如此之长。',
        'i 啊啊啊啊！',
        's 突然之间，你想起了冈田教你的技巧。',
        'i 拼了！',
        'show character gw normal',
        's 你猛然跃起，然后就地倒下，强行止住冲向前方的势头。怪物跟随着你跃起，',
        's 但没能跟上你后续的动作，它从你的头顶飞过，沉重的身体砸落在你前方的地面上，砸碎了瓷砖。',
        'gw 圣哉！圣哉！圣哉！',
        's 它沉重的身体在地面上留下血、机油与滚落的齿轮，不那么灵活地挣扎想要起身。',
        'show character h shooting',
        's 叮叮叮！',
        's 钢钎从你身后飞来，掠过你的身侧，扎入了怪物的身体，蒸汽混合着机油和血液的气味喷在你的脸上。',
        'show character h chat',
        'h 已经没事了。',
        'h 闲杂人等退散！明天还要上工，一切交给我们处理！',
        'hide character h',
        's 护卫队驱散了从宿舍里探出头来的人，将惊魂未定的你送回了房间里。',
        'show scene E3_dorm with fadeIn duration 3s',
        'show character a worried',
        'a 你没事吧？有没有受伤？',
        'i ……嗯……就擦伤了一点，问题不大。幸亏你之前教我了两招……',
        'a 那就好那就好，真的吓死我了。',
        'a 唉，白天看着还好好的人，谁知道转头就变成这个样子。这两天大家都人心惶惶的……',
        //ito：想把关于经济危机的事情加在选项的部分之前。',
        //此处放电报机收信的哔声。',
        'play sound ring_telegraph',
        'i 等下，有电报来了。',
        'hide character a',
        //此处传来电报机的长短嘀声',
        'play sound morse code',
        's 你走到电报机前，看着印着长短点的纸带被机器一行行吐出来。你仔细分辨着纸带上的信息。',
        'play sound morse code',
        's {{player.name}}：',
        'play sound morse code',
        's 你爸、你妈、你爷爷还有弟弟妹妹全家人听说你们最近月薪增加了，心里十分欣慰。',
        'play sound morse code',
        's 现在，有本事的人都去光照充足的地方当工人，更莫说你在顶呱呱的新日跟前工作，提起你的事，你爸妈都倍儿骄傲。这是咱家几代人的一大喜事。',
        'play sound morse code',
        's 眼见自己的儿子端上了铁饭碗，谁家的家人不高兴呢……',
        'play sound morse code',
        's 只是，最近你爸的身体又变差了：他腿总疼，近几天下不来床，比刚遭了扭曲的那一阵儿更糟了。',
        'play sound morse code',
        's 医生说，要治好他的腿，需要九千日能，可是咱家怎么能拿得出这样大的一笔能源？哪怕是为了不让他恶化，每月也需要五百日能。',
        'play sound morse code',
        's 我们兄弟几个凑了一些，加上你和你弟弟送回的，也还差一些……{{player.name}}，你爸一向最疼你，如果能源还有宽裕的话，还是多送些回来吧。',
        'play sound morse code',
        's 除此以外家里一切都好，不要太挂念，你工厂里的工作忙，家里的事情就全靠你妈了。',
        'play sound morse code',
        's 大伯上',
        //电报的嘀声结束
        'i ……',
        'i 冈田……能借我点儿日能不？家里来信说我爸病情严重了，可我这个月已经见底了。等下个月的份儿发下来，我马上就还你。',
        'show character a worried',
        'a 天啊，希望你爸还好。你需要多少？',
        'i 四百日能……不，三百就够了。',
        'show character a taking_out_sth',
        'a 我借你四百。',
        'i 哥啊！你仗义啊，我没看错你……你等下，我给你打个借条。',
        'a 哎哎，借条就不用了。咱认识这么久了，我信得过你，你记得还就行了，我攒了好久的啊。',
        'show character a bored',
        'a 但是话说回来，刚才那个扭曲，已经是这两天的第二个了。',
        'show character a worried',
        'a ……*的，这鬼日子过不下去了，再这样下去还没发财，人先交待在这里了。',
        'a 还不如跑呢。',
        'i ……是啊，这儿真是太吓人了。',
        'i 你要跑吗？',
        'show character a bored',
        'a 唉……跑？不跑？',
        'a 我拿不准主意！新日工厂和那些日结的活儿不一样，这可是生产日能的地方。',
        'a 你想想，咱们当初可是削尖了脑袋都难进，现在一走了之是容易，可是要想到时候再回来，厂子把你一脚踹开，怎么办？',
        'a 现在外面满地是扭曲，要是丢了饭碗，没了日能，咱们怎么抵抗扭曲？',
        'show character a worried',
        'a 你听说过没有？背包里没有日能的人，碰上扭曲那死得叫一个，嘶——',
        'i 可是要是在这干等着，那帮扭曲也早晚把咱们抓去做下酒小菜……',
        'a 所以我这不是纠结死了么！',
        'a 咱们可得好好想想……',
        'show character a happy',
        'a 哎，要么你来拿个主意，要是你走的话，兄弟也跟你一块走。仗义吧？',
        'i ……我，我再想想。',
        'show character a bored',
        'a 想，但是别拖，要走得趁早！咱们没那么多时间。明早晨上工之前，你得给个准话。',
        'a 同工区的藤本他们好像也有要跑的意思。明天要是咱们一起跑，人多的话心也不慌。',
        'hide character a',
        'show scene #000000',
        's 当夜，你躺在床上辗转反侧，脑袋里一半是工作与能源配额、你躺在病床上的父亲，一半是走廊上怪物向你扑来的场景，翻来覆去地重复着。',
        'show scene E3_dorm with fadeIn duration 3s',
        's 当第二天上工时间快要到时，你做出了决定。',
        //插入选项，选择不逃跳转至2-1，逃跑跳转至2-2
        'play sound choices',
        {'Choice':{
            'Dialog': 's 要逃走吗？',
            'no': {
                'Text': '算了，不走了',
                'Do': 'jump E3-S2-1',
                //跳转到【2-1】S2-1
            },
            'yes': {
                'Text': '我想回家',
                'Do': 'jump E3-S2-2',
                //跳转到【2-2】S2-2
            },
        },
        },
    ],
    /**
	 * ====================================
	 *【2-2】S2-2
	 * ====================================
	 **/
    'E3-S2-2':[
        'show character a bored',
        'i 我想回去看看家里人。现在我爸身体越来越差了。而且……现在厂区太诡异了，要是我不明不白地死在这儿，家里人肯定会难过。',
        'a 好，现在就走。',
        'i ……等一下，你答应得这么干脆？不是说怕丢饭碗吗？',
        'a 你昨儿不是想了一整宿吗？你肯定想清楚了。',
        'show character a worried',
        'a 我嘛，反正伸头是一刀，缩头也是一刀，倒不如干脆搏一搏，咱俩一起跑也有个照应。至于工作和能源，哎……再说吧，丢了工作总比被扭曲啃了体面……',
        'i 是啊……还是小命要紧。溜吧！',
        'hide character a',
        's 你们快速洗漱完，收拾好简单的行装，和藤本他们汇合，然后向厂区大门的方向走去。',
        'centered',
        'show scene corridor_day with fadeIn duration 3s',
        'centered',
        'show scene factory with fadeIn duration 3s',
        'cenetered',
        'show scene ice_day with fadeIn duration 3s',
        's 你们赶在上工之前来到了厂区的大门外。厚重的金属大门后方是无际的冰原，只能看到几辆运输车在冰雪中穿行。',
        //这里背景短暂切换成冰原
        'show character h chat',
        'h 你们来这里做什么？',
        'hide character h',
        'show character a bored',
        'a （对你使了个眼色）',
        'show character a happy',
        'a 就是到处走走。对了，您知道为什么大门关上了啊？',
        'h 收到消息，最近冰原聚居点中的扭曲激增，为了保证厂区的安全就封闭了大门，一会上工的时候你们就会收到通知。',
        'a ……好我知道了，谢谢啊。',
        'show background factory with fadeIn duration 3s',
        'show character a worried',
        's 然后，冈田拉着你们快速离开了大门。',
        'i 大门莫名其妙封掉了，而且为什么看门的会是护卫队的人？',
        'a 虽然只是来看看情况，但没想到还是发生了这种事。',
        'hide character a',
        'show character lb whisper',
        'lb ……这样看起来我们应该是没法走正常程序离开工厂了。',
        'hide character lb',
        'play sound factory_bell',
        's 广播里传来铃声。',
        'show character a bored',
        'a 先听听他们说的通知吧。',
        'hide character a',
        's “各位奋战在新日工厂中的同志们，大家好，现在宣布一则新通知。”',
        's “近日我们接到报告称，冰原上的扭曲事件相比往日上升了2-3倍，同时由于各个城市适逢更新换代的关键时期，新日能源供应需求增大。”',
        's “因此工厂决定实行暂时性的隔离政策，严格控制工厂的人员出入，同时暂缓休假和返乡申请。我们全厂上下，全力攻坚，争取早日打赢新日能源供应战……”',
        'i 果然……',
        'show character a worried',
        'a 看起来确实是出了什么非常大的问题……我们还是先去上工吧。',
        'hide character a',
        's 不知道是不是因为广播通知的原因，今天的工作非常忙碌，流水线上的零件源源不断，你挑得眼睛都要瞎了，一回宿舍就迫不及待地倒在了床上。',
        //切换成宿舍背景
        'show scene E3_dorm with fadeIn duration 3s',
        'i 累死我了……冈田呢？',
        'show character a bored',
        'a 我来了，耽误了点时间。你怎么躺下了？',
        'i 嗯，累啊……',
        //此处响起钳子砸在床头上的梆梆声。
        'i 你干嘛，什么玩意儿？吵死了！',
        'a 家伙我搞到了，从工位上顺了把钳子。',
        'i 钳，钳子……？',
        'i 刚刚竟然差点睡着……我是干太多活儿，脑子瓦特了？',
        'a 嗐，快起来！想好要走了吗？咱要不要再想想？',
        'show character a worried',
        'a 本来以为逃出去就万事大吉了，但听了今天的广播，事儿可能大条了。',
        'a 咱们在厂里几乎没接触到外面的信息，广播说外面扭曲激增，要是咱一出门就被一群扭曲淹没掉了怎么办？',
        'i 你这，呃，不讲点壮胆的，非得吓唬人两句是吧。',
        'a 我这不就是想知道你现在怎么想的？我们要现在趁着天黑想办法逃吗？还是先在这留着？',
        //弹出选项逃跑和不逃，此处选不逃跳转至【2-1-1】，逃跳转至【2-2-1】
        'play sound choices',
        {'Choice':{
            'Dialog': 's 要逃走吗？',

            'no': {
                'Text': '算了，不走了',
                'Do': 'jump E3-S2-1-1',
                //跳转到【2-1-1】S2-1-1
            },
            'yes': {
                'Text': '我还是想回家',
                'Do': 'jump E3-S2-2-1',
                //跳转到【2-2-1】S2-2-1
            },
        },},
    ],

    /**
	 * ====================================
	 *【2-2-1】S2-2-1
	 * ====================================
	 **/
    'E3-S2-2-1':[
        'i 我们离开这里！之前排队和家里人打电话的时候，他们也说了扭曲的事情，我很担心他们。',
        'show character a happy',
        'a 那咱们走吧！',
        'show scene corridor_night with fadeIn duration 3s',
        's 冈田看了看走廊的另一头。',
        'show character a bored',
        'a 嗯……走吧。藤本他们好像说不来了，今晚就咱们两个。',
        'show scene factory with fadeIn duration 3s',
        's 时间一分一秒地流逝，你们听到夜班的工人起床穿过宿舍之间的街道，走向远处，时间已经很晚，但你们毫无睡意。',
        'i 差不多了。',
        'show character a bored',
        'a 我知道一条小路。',
        'hide character a',
        's 你们穿好最厚的衣服，背着燃料和食物悄悄地离开宿舍，沿着一条小道避开了那些开阔地。',
        //切换成工厂背景，两侧逐渐被黑色挡住，做出巷道里往外看的感觉

        's 道路两侧不加装饰的墙体表面上凸出黄铜的管道，闸门喷出蒸汽。',
        's 在这些高温水汽的轰鸣中，你感受到了新日的脉动。此刻不知是否是心理作用，你觉得脉动有些急促，仿佛有什么大事要发生。',
        'show character a bored',
        'a 就是这里。',
        'i 外面就是冰原吗？',
        'a 对的，我之前瞎溜达的时候发现的地方，附近都是自动机器，没什么人，剪开这些铁丝网就能出去。',
        'i 亏你能发现这种地方，快点吧！',
        'a 你帮我放风。',
        'i 好。',
        'hide character a',
        's 你站在这条窄道的入口，紧张地看着两侧是否有人走过，身后的冈田一根一根地剪着铁丝网，每两下之间的间隔都被拉长。',
        'i （我去……好冷，我居然出汗了吗？）',
        'i 你好了没啊？是不是遇到难剪的了？',
        'i 要我说得快点，这种地方一看就像是会出事情的哈哈哈……',
        'i 诶你怎么不说话？你……',
        's 冰冷的枪械抵在了你的背后，同时响起了一个冷漠的声音。',
        'show character h shooting',
        'h 抱头，蹲下来。',
        //插入护卫队立绘
        's 你抱着头慢慢蹲下，眼角的余光里，冈田也和你做出了同样的姿势，另一把齿轮枪抵在他的后背，两根钢索在风中飘荡着。',
        'i （该死……）',
        'h 公然违反通知，违抗命令，破坏工厂设施。',
        'h 跟我们走一趟吧。',
        //短暂黑屏，然后画面转为宿舍，黑屏期间插一段脚步声
        'centered',
        'show scene #000000',
        'play sound footsteps',
        'centered',
        'show scene E3_dorm with fadeIn duration 3s',
        'show character h chat',
        'h 接下来的时间，你们就住在这里，上工时间不变。',
        'h 此外，扣除本月的工资和奖金，作为你们违反规定私自逃脱的处罚。',
        'i 厂规里对破坏围栏的惩罚措施不是这样的！而且为什么不准我们走？',
        'h 特殊时期，不可同日而语。',
        'hide character h',
        'show character a worried',
        'a 现在工厂里不安全，{{player name}}都遇到了两次扭曲，还差点被杀掉，你们这样不准走会出事情的！',
        'hide character a',
        'show character h chat',
        'h 走？去哪儿？跑到夜里去？',
        'h 扭曲来自永夜的诅咒，只有新日的照耀下，你们才是安全的！',
        'hide character h',
        's 不等你们再说什么，护卫队员就重重关上了门。',
        'i 可恶……',
        'show character a worried',
        'a 太奇怪了……',
        'i 平时护卫队不会亲自处理这种事情，而且我们完全没经过通报或者问询的程序就被带到这里来。',
        'a 那就说明问题可能很严重了，已经没有时间走这些流程，但同时他们还非常需要我们的工作去维护新日。',
        'i 说起来……这是哪里？',
        'show character a bored',
        'a 大概是厂区北边，这片地方我没来过，好像也没什么工作是要在这里进行的。',
        'i 我记得之前说要修建新厂区，这个宿舍很新，可能就是所谓的新区。',
        'a 分开管理，不让我们和其他人接触么……',
        'i 你看，窗外是什么！',
        'hide character a',
        's 窗外，新日的光芒将宿舍楼的影子拉得很长，但十几层楼高的影子中断在了高墙的脚下。',
        's 钢铁铸成的墙壁拔地而起，无数齿轮与管线攀附其上，在墙的顶端，雪白的探照灯扫视着整片区域，护卫队的身影来回走动。',
        'show character a worried',
        'a 看守这么严格吗？',
        'i 看起来我们是逃不出去了……',

            //接【2-2-2】
            'jump S2-2-2',
            //跳转到【2-2-2】S2-2-2
        ],
    })