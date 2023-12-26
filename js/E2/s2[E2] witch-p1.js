/**
 * =======================================
 * S2剧情：		  女巫的火刑（part1）
 * 文件名：			witch p1
 * 创建日期：		2023-10-08
 * 时间线索引：	
 * 写手：			Noema
 * 程序演绎：		栗子
 * 更新：
 * 20231008        【栗子】转写完成，等待剧情树完成后需补充所有剧情线解锁相关；
 *                  一些演出效果（如particles，逐渐遮挡的小巷）可以后期再优化一下
 *
 * =======================================
 */

/**
*   索引：
*   i = 我 ， s = 旁白 ， elena = 埃莱娜 ， newsboy = 报童，pink = 平科
*   cma = 村民a ， cmb = 村民b，swa = 守卫a，swb = 守卫b
*   lpsg = 蓝袍神官  hyzj = 红衣主教  bpxn = 白袍修女
*/

// Define the videos.


// Define the messages used in the game.
monogatari.action ('message').messages ({
    // 结局弹窗
    'Ending-E2BE': {
      title: '结局：永恒之火',
      subtitle: 'Ere the Judgement Day.',
      body: `
        <p>在公正的审判之前，烈火就宣读了你的命运，你分不清那火光中究竟写着新生，还是死亡。</p>
  
      `
    },
  
    'Ending-E2leave_alone': {
        title: '结局：独自逃亡',
        subtitle: '对已知命运的恐惧使你不顾一切地逃离。',
        body: `
          <p>然而，没有同伴的你能走多远？大火是否又会在未来的某刻降临？你并不清楚，只能祈祷隐秘和孤独继续做你的帮手。</p>
  
        `
    },
  
    'Ending-E2traitor': {
      title: '结局：第十三位门徒',
      subtitle: '没有信的地方，猜忌便滋长。',
      body: `
        <p>你们趁夜出逃的计划遭到了出卖。人究竟是先有了同伴，还是先有了信任？你在火光中陷入了沉思。</p>
        <p>（如果能再来一次的话……点击主菜单“故事线”相应节点重新开始）</p>
  
      `
    },
  
    'Ending-E2repeat': {
      title: '结局：红，白，蓝',
      subtitle: '旋转不停的天堂理发店。',
      body: `
        <p>你试图独自逃离，最终在神殿光怪陆离的大厅之中迷失了路途，也许失败的种子早在此前的重蹈覆辙中埋下。</p>
        <p>（如果能再来一次的话……点击主菜单“故事线”相应节点重新开始）</p>
  
      `
    },

    'Ending-E2taken_away':{
      title: '结局：沉默的羔羊',
      subtitle: 'Mary is a little lamb.',
      body: `
        <p>你厌恶现状，却又不敢违抗现状，最终不出意料地被带去了无人知晓的地方。</p>
        <p>（如果能再来一次的话……点击主菜单“故事线”相应节点重新开始）</p>
  
      `
    },

    'Ending-E2again':{
        title: '结局：永恒之火',
        subtitle: 'Ere the Judgement Day.',
        body: `
          <p>在公正的审判之前，你最终还是没能逃离烈火为你书写的命运。</p>
          <p>（如果能再来一次的话……点击主菜单“故事线”相应节点重新开始）</p>
        `
    },

    'Ending-E2HE':{
      title: '结局：燃烧的东方',
      subtitle: '东方升起了烈火，也升起了太阳。',
      body: `
        <p>你们彼此信任、互相支持，最终在火山的烈焰吞没一切之前逃离了神殿。也许未来大地还要流泪又流血，但太阳也还会升起，希望与可能尚存。</p>
      `
  },

  'E2_cgunlock1': {
    title: '解锁画廊：花窗',
    subtitle: '',
    body: `
      <p>神爱世人。洁白的克维德神向地上伸出手臂，烈火和看不清面孔的人影将祂托起。</p>

    `
  },

  'E2_cgunlock2': {
    title: '解锁画廊：破碎的花窗',
    subtitle: '',
    body: `
      <p>远处的天际好像克维德神手中的圣书，在那秘而不宣的书页之间，你看见远山流下了一滴血。</p>

    `
  },

  'E2_cgunlock3': {
    title: '解锁画廊：无题',
    subtitle: '',
    body: `
      <p>美术馆的角落里，一幅不知其名的画静静凝望着来往的人们，等待谁想起它讲述的故事。</p>

    `
  },

}),

// Define the images.
monogatari.assets ('images', {
  'E2_cg1': 'E2_cg1.png',
  'E2_cg2': 'E2_cg2.png',
  'E2_cg3': 'E2_cg3.png'
  
});

// Define the gallery.
monogatari.assets ('gallery', {
  'E2_cg1': 'E2_cg1.png',
  'E2_cg2': 'E2_cg2.png',
  'E2_cg3': 'E2_cg3.png'
});

// Define the scenes.
monogatari.assets ('scenes', {
  'village': 'E2_village.png',
  'village_fire': 'E2_village_fire.png',
  'stairs': 'E2_stairs.png',
  'redhall': 'E2_redhall.png',
  'bluehall': 'E2_bluehall.png',
  'whitehall': 'E2_whitehall.png',
  'pray': 'E2_pray.png',
  'moon': 'E2_moon.png',
  'flower': 'E2_flower.png',
  'crypt': 'E2_crypt.png',
  'crypt_black': 'E2_crypt_black.png',
  'communion': 'E2_communion.png',
  'circle': 'E2_circle.png',
  'whitehall_black': 'E2_whitehall_black.png',
  'E2_loop1': 'E2_loop1.png',
  'E2_loop2': 'E2_loop2.png',
  'E2_loop3': 'E2_loop3.png',
  'E2_loop4': 'E2_loop4.png',
  'E2_loop5': 'E2_loop5.png',
  'E2_stairs-0-1': 'E2_stairs-0-1.png',
  'E2_stairs-0-2': 'E2_stairs-0-2.png',
  'E2_stairs-0-3': 'E2_stairs-0-3.png',
  'E2_flash1': 'E2_flash1.png',
  'E2_flash2': 'E2_flash2.png',
  'E2_flash3': 'E2_flash3.png',
  'E2_flash4': 'E2_flash4.png',
  'E2_flash5': 'E2_flash5.png',
  'E2_flash6': 'E2_flash6.png',
  'E2_flash7': 'E2_flash7.png',
  'E2_flash8': 'E2_flash8.png',
  'E2_flash9': 'E2_flash9.png',
  'E2_flash10': 'E2_flash10.png',
  'E2_flash11': 'E2_flash11.png',
  'E2_flash12': 'E2_flash12.png',
  'E2_flash13': 'E2_flash13.png',
  'E2_flash14': 'E2_flash14.png',
  'E2_scanning1': 'E2_scanning1.png',
  'E2_scanning2': 'E2_scanning2.png',
  'E2_scanning3': 'E2_scanning3.png',
  'E2_scanning4': 'E2_scanning4.png',
  'E2_scanning5': 'E2_scanning5.png',
  'E2_scanning6': 'E2_scanning6.png',
  'E2_scanning7': 'E2_scanning7.png',
  'E2_scanning8': 'E2_scanning8.png',
  'E2_scanning9': 'E2_scanning9.png',
}),

// Define the Characters
monogatari.characters ({
  'elena': {
      name: '埃莱娜',
      color: '#00A88A',
      directory:'E2',
      sprites:{
          'dark':'eln_dark.png',
          'red':'eln_red.png',
          'normal':'eln_normal.png',
          'shrug':'eln_shrug.png',
          'titter':'eln_titter.png',
          'shadow':'eln_shadow.png',
          'shadow_big':'eln_shadow_big.png',
          'test': 'eln_test.png',
          
  },
},

  'swa': {
      name: '守卫a',
      color: '#00A88A',
      directory:'E2',
      sprites:{
          'normal':'swa.png',
      },
  },

  'swb': {
    name: '守卫b',
    color: '#00A88A',
    directory:'E2',
    sprites:{
        'normal':'swb.png',
    },
  },

  'lpsg': {
    name: '蓝袍神官',
    color: '#00A88A',
    directory:'E2',
    sprites:{
        'normal':'lpsg_normal.png',
        'mock':'lpsg_mock.png',
    },
  }, 

  'bpxn': {
    name: '白袍修女',
    color: '#00A88A',
    directory:'E2',
    sprites:{
        'normal':'bpxn_normal.png',
        'confused':'bpxn_confused.png',
    },
  }, 

  'hyzj': {
    name: '红衣主教',
    color: '#00A88A',
    directory:'E2',
    sprites:{
        'normal':'hyzj_normal.png',
    },
  }, 

  'cma': {
      name: '村民a',
      color: '#00A88A',
      directory:'E2',
      sprites:{
          'branded':'cma_branded.png',
          'glance':'cma_glance.png',
          'normal':'cma_normal.png',
          'not_care':'cma_not_care.png',
      },
  },

  'cmb': {
      name: '村民b',
      color: '#00A88A',
      directory:'E2',
      sprites:{
          'branded':'cmb_branded.png',
          'pray':'cmb_pray.png',
          'normal':'cmb_normal.png',
      },
  },


  'pink': {
      name: '平科',
      color: '#00A88A',
      directory:'E2',
      sprites:{
          'normal':'pink_normal.png',
      },
  },

  'newsboy': {
        name: '报童',
        color: '#00A88A',
  },

  'zcm': {
    name: '众村民',
    color: '#00A88A',
  }, 

  'bigbai': {
    name: '大白',
    color: '#00A88A',
  }, 

  'text': {
    name: '短信',
    color: '#00A88A',
  }, 


});

monogatari.script({
    /**
	 * ====================================
	 *【0】S0
	 * ====================================
	 **/
  'E2-S0':[ 
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE2);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }}, 
      'show scene #000000',
      'stop music',
      's 已经在小区被封控了八十二天，每天大白上门捅鼻子确保你的安全，总让你热泪盈眶，泪眼朦胧中……',
      'play sound new_message',
      'text 通信大数据显示您最近去过风险区域xx便利店，请立即向所在街道报备行程，确定管控措施。',
      'i （这通信大数据怎么跟淘宝似的，昨天还在跟冈田打电话说我想去便利店狂吃四十块钱关东煮，问题是我也去不了啊……）',
      'i （算了不管了，反正整天关在小区，爱怎么管控怎么管控吧。）',
      //（敲门声）
      'play sound knocking_door',
      'bigbai 您好，请您开一下门！',
      'i 什么情况？今天不是做过了吗？',
      'bigbai 跟您通知一下，你们小区1102户居民昨天的核酸显示为阳性。',
      'bigbai 我们要进行为期三天的静默管控，请居民配合防疫，足不出户，珍爱自己和他人的健康。',
      'i 说到这我还有话想问呢，为什么短信给我通知说最近去过xx便利店？我在这个小区已经关了八十二天了！',
      'bigbai 疫情期间，电信诈骗盛行，请您自行甄别。感谢您的理解与支持。',
      'i ……我怎么理解？怎么支持？把人关在小区已经够受的了，天天吃烂菜叶子，远程上课要挂科了，现在又变成足不出户？1102户那个谁没出过小区他怎么感染的？谁知道是真的假的？不给个说法？！',
      'bigbai 您不要激动，我们只是通知到户，没有其他的权限，这个问题请您向社区反映，我们也没有办法。',
      'bigbai 等下会有专门的工作人员上门安装封条和监控设施。请您配合。',
      'i （没有办法……没有办法……我看你们关人倒是有办法的很。）',
      'play sound footsteps',
      's 你随便抓了两件衣服穿上，打算去小区里进行最后的自由散步活动……',
      //（开门声）
      'i ……',
      'bigbai 请出示健康码。',
      'i 怎么出楼还要看码啊……',
      'bigbai 请您配合。',
      's 你只好叹了口气，掏出手机。',
      'centered',
      'show scene E2_scanning1',
      'wait 2000',
      'show scene E2_scanning2',
      'wait 2000',
      'show scene E2_scanning3 with fadeIn duration 2s',
      'wait 800',
      'show scene E2_scanning4 with fadeIn duration 2s',
      'wait 800',
      'show scene E2_scanning5 with fadeIn duration 2s',
      'wait 800',
      'show scene E2_scanning6 with fadeIn duration 2s',
      'wait 800',
      'show scene E2_scanning7 with fadeIn duration 2s',
      'wait 800',
      'show scene E2_scanning8',
      'wait 2000',
      'show scene E2_scanning9',
      'play sound stats_down',
      'centered',
      's 你被红了个措手不及，屏幕上自动刷新的红色方块将你吞噬进去……',
      'play music E2_danger with loop fade 3 volume 50',
      'show scene #00000',
      'centered',
      //（红码动画）
      'show scene E2_flash1 with fadeIn duartion 3s',
      'wait 1500',
      'show scene E2_flash2 with fadeIn duartion 3s',
      'centered',
      'show scene E2_flash3 with fadeIn duartion 3s',
      'wait 2000',
      'show scene E2_flash4 with fadeIn duartion 3s',
      'wait 2000',
      'show scene E2_flash5 with fadeIn duartion 3s',
      'wait 2000',
      'show scene E2_flash6 with fadeIn duartion 3s',
      'wait 2000',
      'show scene E2_flash7 with fadeIn duartion 3s',
      'wait 2000',
      'show scene E2_flash8 with fadeIn duartion 3s',
      'wait 2000',
      'show scene E2_flash9 with fadeIn duartion 3s',
      'wait 2000',
      'show scene E2_flash10 with fadeIn duartion 3s',
      'wait 2000',
      'show scene E2_flash11 with fadeIn duartion 3s',
      'wait 2000',
      'show scene E2_flash12 with fadeIn duartion 3s',
      'wait 2000',
      'show scene E2_flash13 with fadeIn duartion 3s',
      'wait 2000',
      'show scene E2_flash14 with fadeIn duartion 3s',
      'centered',
      'show scene #000000',
      'wait 500',
      'show scene whitehall_black with fadeIn duration 3s',
      'centered',
      'i ……',
      'i （我这是在……哪？）',
      's 当你因为红码而陷入存在者眩晕，一切物体都将坐上审判你身份的陪审席。',
      's 这是不容质疑的主体性大移民。',
      's 你需要向墙壁自证，向铁门自证，向空气中漂浮的颗粒自证。',
      's 你面对的是任何时代的墙壁，铁门，空气中漂浮的颗粒，',
      's 也包括现在出现你眼前的布景。',
      's 它们对你而言十分陌生，但这是被允许的，因为你曾称之为“日常”的世界也不再对你感到熟悉，',
      's 这里是例外的空间，例外的时期。',
      'show character elena shadow',
      's 唯一能使你确认你存在的是眼前这个突然出现的红色方块。',
      's 一生二，二生三，三生万物，万物生二维码。',
      'i （哦圣洁的大便！我是中了什么红码诅咒吗？）',
      'elena 呀——咿——嘶嘶——',
      // 此处可以只有一个剪影+红色方块
      'show character elena shadow_big',
      's 披裹长袍的身影骤然向你俯下身来，昏暗中的红色方块离你越来越近——',
      'i （啊啊你不要过来啊！）',
      'i 呀——呀——啊啊啊啊啊！',
      's 你想要说出什么话语，却只发出了咿呀的响声。',
      'i （……我怎么说不出话了？）',
      'i （嘴里怎么是空的？）',
      's 人在突然失去某一个身体器官时往往感受到的是它曾经所占据的位置，一种空间关系，以及移动的次序。',
      's 比如就在此刻，“舌头”这个词并没有立刻出现在你的脑海中，代替它的是一种“空”。',
      'elena 唔唔——嗯——啊！',
      'hide character elena',
      'play sound door_slam',
      's 你恐惧这种空对空的交流，双手撑地拼命向后蹭，猛然撞上了一个坚硬冰冷的东西。',
      's 一转头，一尊巨大的白色大理石神像正用手指着你的额头。',
      'i （这是什么廉价的jump scare吗？什么鬼地方……）',
      'show scene whitehall with fadeIn duration 7s',
      's 你打了个廉价的激灵，眼睛逐渐适应昏暗，看到那个身影渐渐退回远处，那里还隐约跪着几条长袍覆盖的立体物质。',
      's 此外，是无边，无端，无菌的白。',
      'centered',
      'show character hyzj normal',
      'centered',
      'hyzj ……人要下手拿住你们，逼迫你们，把你们交给会堂，并且收在监里，又为我的名拉你们到君主诸侯面前。',
      'hyzj 但这些事终必为你们的见证……你们也有被他们害死的……',
      'i ……',
      'i （这是有人在布道？） ',
      'hyzj 有火一般的考验临到你们，不要奇怪，似乎是遭遇非常的事，',
      'hyzj 倒要欢喜，因为你们是与克维德神一同受苦，使你们在他荣耀显现的時候也可以欢喜快乐……',
      'i （欢喜个头，搞什么忆苦思甜延迟享受……）',
      'hide character hyzj',
      'show character bpxn normal',
      'play sound footsteps',
      's 四个身着白袍的女人突然闪现在你的面前，抓住你的手臂将你扭送到神像前跪着的那一排人影中。',
      'play sound door_slam',
      's 不等你反应，你的肩膀就被死死地按压下去，膝盖一弯，骨头与石头碰撞，寂静的大殿中响起沉重的回声。',
      'hide character bpxn',
      'i （痛……痛啊大姐们！）',
      'show character hyzj normal',
      'hyzj ……若有人自以为虔诚，却不勒住他的舌头，反欺哄自己的心，这人的虔诚是虚的……',
      'i （好家伙，这就是您勒我舌头的原因？）',
      'hide character hyzj',
      'stop music E2_danger with fade 3',
      's 不知何时，周遭突然变得格外安静，空气中开始弥漫着一种“虔诚”的味道。',
      's 香料氤氲在蒸汽中，淡淡的血腥，羊的膻味，石头缝里渗入古老霉菌。',
      's 侵略性的气味蔓延，你感到格外熟悉，是小时候用把黑虎炮扔进垃圾桶后散发的清香。',
      'i （咳，好想咳嗽，原来咳嗽也需要舌头，无用的知识增加了……）',
      's 空气中，气味逐渐汇聚为形象，淡黄色的烟雾从白色的镂空花窗中缓缓渗入，漂浮在大殿上空，',
      's 披着白袍的虔诚人影头顶，汇聚起一个巨大的漩涡，安静地凝视着一切。',
      'i （淡黄色是硫元素单质吧，硫化氢和正价硫酸亚硫酸氧化还原生成硫单质……）',
      'i （这是什么特殊的宗教仪式吗？）',
      // 开始播放音乐：雷妈厕曲之Nectar of the Gods
      'play music E3_a_cut_in_love with volume 50',
      's 淡黄色的宁静。',
      's 你隐隐感到有什么不对劲，但只能盯着那个转动的漩涡出神。',
      'i （随机性为自己选择一种秩序态，自由地坍塌下去，这样的流体总是很美的啊……）',
      'show scene #000000',
      'centered',
      's “……要照亮坐在黑暗中死荫里的人，把我们的脚引到平安的路上，”',
      's “要呼唤迷失在险途上游荡的羔羊，当那日降临，没有人能逃脱审判的钟响。”',
      'centered',
      'play sound door_slam',
      'play music E2_burning with loop fade 3 volume 50',
      'show scene redhall with fadeIn duration 7s',
      'play sound burning with loop',
      's 突然，在一声仿佛来自深渊的轰鸣之后，漩涡开始左右摇摆，大理石雕塑变得柔软。',
      'play sound door_slam',
      's 花窗在接二连三的咔嚓声中碎裂成小块，四处飞舞白色的蝴蝶残翅。',
      'play sound knock_metal',
      'show scene #000000',
      's 灰色浓烟骤然涌入大殿，七窍八孔五脏六腑突然被封了口，在你反应过来之前，炽热的气流已经将你团团包裹。',
      'show scene circle with fadeIn duration 3s',
      's 浓烟中，十具焦黑的尸体双手合十，像常年长在殿中的朽木，',
      's 她们面前那尊巨大的神像，毫发无损，仍然是伸手下指的姿势。',
      's 如果有灵魂的话，现在升上空中的可以称之为你的灵魂，',
      's 它越升越高，一如主在天上看。',
      's ……',
      's “但现今，你们既从罪里得了释放，做了神的奴仆，就有成圣的果子，那结局就是永生……”',
      'show scene #000000',
      'stop music E2_burning with fade 7',
      'stop sound burning with fade 7',
      's “从罪里得了释放……”',
      's “神的奴仆……”',
      's “结局就是永生……”',
      'centered',
      'centered 死亡人数：10',
      'show image E2_cg1 with fadeIn duration 3s',
      'gallery unlock E2_cg1',
      'centered',
      'play sound notification',
      'show message E2_cgunlock1',
      'play sound notification',
      'show message Ending-E2BE',
      'jump E2-S1-1',
      //画面变暗
      //画面中央显示：【死亡人数：10】

  ],

/**
 * ====================================
 *【1-1】S1-1
 * ====================================
**/
  'E2-S1-1':[
    //从黑屏开始，周围是嘈杂的人声
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE2);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
    'show scene #000000',
    'play sound crowd_whisper with loop fade 2',
    'centered',
    'i ……',
    'i ……',
    'i （不是我说，怎么这梦还没做完？我死了还不成吗……）',
    'stop sound crowd_whisper',
    'elena ……醒醒！',
    'show scene crypt with fadeIn duration 3s',
    'play music E2_happy with loop fade 3 volume 50',
    'show character elena normal',
    'elena 醒醒！您也太能睡了姐姐！',
    'i 冈……冈田？',
    'i 你穿女装还怪好看的。',
    'elena 睡傻了吧你，老娘叫埃莱娜！什么女装？这是我自己缝的斗篷！',
    'i 嘿嘿，波西米亚风，狂野，好看。',
    'elena 你怎么嘴里念叨的都是些乱七八糟的玩意儿？',
    'elena 不过咱就是说还是你有品味，那些土老帽看不懂我的设计，说我穿的像要饭的。',
    'elena 现在好了，全村这么多人，就我偷偷在斗篷的补丁里藏了面包，一个个饿得前胸贴后背的时候倒来问我要饭了。',
    'elena 喏，你拿一个，趁他们起床前赶紧吃掉。',
    'i 唔@#¥……好香，原乃我泽么饿了#*¥',
    'hide character elena',
    's 窗外传来了一阵叫卖声。',
    'newsboy 罗墨齐亚日报！号外！号外！',
    'newsboy 昨日农齐亚村神迹显现，木柴自燃，声如簧管齐鸣，见证者受邀觐见教皇！',
    'newsboy 土豆市价三万比特币，橄榄市价六万比特币，葡萄市价……',
    'i 比特币？',
    'i 怎么这个世界还有比特币？',
    'show character elena normal',
    'elena 说什么呢，没有比特币你怎么活啊？',
    'show character elena shrug',
    'elena ……只不过我们伟大的Pittorica三世估计也没想到自己的大名已经通胀到连马桶纸都买不起了哈哈哈！',
    'i 替他默哀。',
    'show character elena titter',
    'elena 别替他默哀，祝我发财！',
    'i 话说这个教皇又是怎么回事啊？',
    'show character elena normal with fadeIn',
    'elena 教皇？就那么回事！',
    'i 那么回事是怎么一回事？',
    'elena 我说那么回事，你就要那么理解，不要理解成那个，那样就太那个了，我们会被那个。',
    'i 不是我说……你是网信办道成肉身吗？',
    'elena 姐姐，我哪敢说是怎么回事啊，我们被关在这不就是因为那位吗？',
    'i 我们犯啥错了吗？',
    'elena 要我说，错就错在长了眼，长了耳，六根不净！',
    'i 不要跟我打哑谜嘛，我是真的想知道出了什么事。',
    'elena 小报童不是说了嘛，我们村看到了怪事情，要去觐见他。',
    'i 啊？原来我们就是农齐亚村的村民？在这个破地窖里？我以为教皇的贵客都在五星级酒店搓麻将呢！',
    'elena 你想的美，我们只需要在报纸里是“贵客”就行了，这几年国库空虚，哪有钱送你去五星级酒店？',
    'i 我觉得不太对劲，现在把我们关在地窖里，指不定后面关在哪呢……',
    'elena 其实我也……',
    'hide character elena',
    'show character pink normal',
    'pink 就算是地窖也是城里的地窖，总比咱们村的土房子要高级！',
    'pink 一年能进几回城呀，现在光听着外面车水马龙的声音我都浑身舒坦，说不定过几天咱们就能出去放风了，到时候满大街都是罗墨齐亚城的美女……嘿嘿……',
    'hide character pink',
    'show character elena normal',
    'elena 你这癞蛤蟆就该关死在地窖里！',
    'hide character elena',
    'show character pink normal',
    'pink 瞧你说的，咱们也要体谅体谅教皇嘛……',
    'pink 现在邻国国王跟我们教廷较劲，竟然开始给主教大人们征关税了，真是想钱想疯了。',
    'pink 教皇也是没办法，总不能在我们这些草民身上花太多钱……',
    'play sound footsteps',
    'hide character pink',
    's 你们正说着，铁门外传来一阵脚步声。',
    'show character swa normal',
    'swa 集合了！集合了！',
    'hide character swa',
    'show character swb normal',
    'swb 都来领面包了！数量有限先到先得！',
    'hide character swb',
    'show character pink normal',
    'pink 你看我说什么来着！教皇还是挂念他的子！民！的！',
    'hide character pink',
    'show character elena normal',
    'elena 真是服了，给他口饭吃他能磕十个响头。',
    'elena 不过咱们也快去，我这里的面包不多了……',
    'hide character elena',
    'show character swa normal',
    'swa 一人一个啊！不许多拿！',
    'hide character swa',
    'centered',
    'show character pink normal',
    'pink 我说守卫大人啊，看您在这里值班也怪不容易的，我这有些上好的烟草，给您来点，这面包我就……',
    'hide character pink',
    'show character swa normal',
    'swa 给我放下！一人一个是听不懂吗？',
    'hide character swa',
    'show character swb normal',
    'swb 把你那货拿出来看看。',
    'hide character swb',
    'show character pink normal',
    'pink 哎好嘞好嘞！',
    'hide character pink',
    'show character swb normal',
    'swb 嗯……也就是一般货色吧……',
    'hide character swb',
    'show character pink normal',
    'pink 瞧您说的，我们农齐亚可是金丝雀烟的原产地，外面买六十万一根呢！',
    'hide character pink',
    'show character swa normal',
    'swa 面包你还是不能多拿，这是上面分下来的，不过我们晚上买酒喝的时候可以分你两口。',
    'hide character swa',
    'show character pink normal',
    'pink 哎好好好，啤酒可是液体面包啊！您真是太为我着想哩！',
    'hide character pink',
    'show character elena normal',
    'elena ……',
    'elena 你看平科那家伙准又在搞什么鬼了，你可得小心他，看着一张人皮，里面是只老鼠。',
    'i 嗯嗯，我会注意的。',
    'hide character elena',
    'stop music E2_happy with fade 3',
    's 天光在地窖里显得更加潮湿和短暂，你们吃完了捉襟见肘的配给粮食，没过多久，日头已经开始西斜。',
    'show character cma normal',
    'cma 说起来，我想到之前听说的一件怪事。',
    'cma 你们听没听说，之前看到过神迹的人都莫名其妙地消失了……',
    'hide character cma',
    'show character cmb pray',
    'cmb 啊？不是说送到克维德神护佑的福地了吗？',
    'hide character cmb',
    'show character cma glance',
    'cma 福地在哪？你听过吗，你见过从福地回来的人吗？',
    'hide character cma',
    'show character cmb normal',
    'cmb 那还真没有……',
    'show character cmb pray',
    'cmb 不过教皇都说了，那是克维德神给他们的福报啊。',
    'cmb “你要认识神，就得平安，福气也必临到你”，神总不会惩罚虔诚的子民吧？',
    'hide character cmb',
    'show character cma not_care',
    'cma 我之前也没细想过这个问题，只是现在咱们也被送到这来了，昨天夜里我冻得睡不着，才开始想这个事……',
    'show character cma normal',
    'cma 你想想，当时那火啥样？',
    'hide character cma',
    'show character elena normal',
    'elena 别问她了，她压根没看着，人围得密密麻麻的，我跟她都在外圈挤不进去！',
    'hide character elena',
    'show character cmb pray',
    'cmb 害，是啊，一开始就是想去凑个热闹，也不知道里面是啥东西……',
    'hide character cmb',
    'show character cma normal',
    'cma 我本来还担心把旁边的房子燎着了，过去看了才发现，你猜怎么着，那火也就一小堆，根本烧不了多久。',
    'cma 你说这个事吧，说大能大，说小能小，要我看还没我家母猪给狗崽子喂奶稀奇。',
    'hide character cma',
    'show character elena normal',
    'elena 你忘啦？当时不还是村长跑去把修道院长老引过来，他们俩人看了以后，商量了一下，这事就算神迹了！',
    'hide character elena',
    'show character cmb pray',
    'cmb 那这样说来，还是长老有智慧。',
    'hide character cmb',
    'show character cma glance',
    'cma 这算哪门子智慧啊？他是长了三只眼睛，还是两张嘴巴？',
    'hide character cma',
    'show character elena titter',
    'elena 哈哈！我只知道老头子用三条腿走路。',
    'hide character elena',
    'show character cmb pray',
    'cmb 但要不是长老，咱们也不会被当作神迹的见证人去觐见教皇啊。',
    'hide character cmb',
    'show character elena normal',
    'elena 你有没有想过，万一长老说那是恶灵作祟呢？咱们岂不是都要一股脑下地狱了！',
    'hide character elena',
    'show character cma not_care',
    'cma 我就想说这个！神迹不神迹的，都靠他一张嘴？',
    'show character cma normal',
    'cma 书上都说了，“这世代为什么求神迹呢？我实在告诉你们，没有神迹给这世代看”。',
    'cma 我们这个世代还不够邪恶混乱吗？我们配得起真正的神迹吗？',
    'hide character cma',
    'show character cmb pray',
    'cmb 可是正因为世道不好，年年歉收，盗匪横行，才更需要神的原谅和庇佑。',
    'cmb 教皇这几年一直在各处搜集神迹，摆祭坛仪式祈福，不就是为了咱们能过上好日子……',
    'hide character cmb',
    'show character elena normal',
    'elena 呵呵，我谢谢他，摆一次祭坛的钱够咱们全村吃两个月的了。',
    'hide character elena',
    'show character cma normal',
    'cma 要我说，克维德神不会救我们的，教皇也不会。',
    'cma 要是不征那么多粮，准我们来城里打打工，这日子兴许还过得下去。',
    'hide character cma',
    'show character elena normal',
    'elena 要是神真的会说话，也得是那句：“你是作奴仆蒙召的吗？不要因此忧虑；若能以自由，就求自由更好。”',
    'hide character elena',
    'i 若能以自由，就求自由更好……',
    'show character elena normal',
    'elena 诶？{{player.name}}，你在听啊，一声不吭的我还以为你睡着了呢！',
    'i 嘿嘿，没有没有，我觉得你们讨论得挺好的，就是插不上话。',
    'hide character elena',
    'show character cma normal',
    'cma 天色也不早了，我要准备准备就睡了。话说埃莱娜你那个斗篷能借我盖盖吗，冻得受不了……',
    'hide character cma',
    'show character elena titter',
    'elena 借你没问题，不过你之前说它丑，它记仇，盖到你身上也要烧着！',
    'i ……',
    'i 我昨晚真做了一个梦……梦见起了一场大火，我们所有人都烧死了……',
    'show character elena normal with fadeIn',
    'elena 呸呸呸，梦是反的！',
    'hide character elena',
    'show character cma normal',
    'cma 唉，要是真来场火我还能烤烤，也不至于每天冷得睡不着。',
    'hide character cma',
    'show character cmb normal',
    'cmb 希望教皇早点准备好觐见仪式，咱们就能去神殿住了……',
    'i 神殿？什么样的神殿？',
    'hide character cmb',
    'show character elena normal',
    'elena 谁也没进过里面，只是听说是建筑大师设计的，造了整三十年，有很多不同颜色的大厅……',
    'hide character elena',
    'show character cma normal',
    'cma 还是快睡吧，等会儿守卫该来骂人了。',
    'hide character cma',
    'show character elena normal',
    'elena 行吧，我也睡了。{{player.name}}，祝你今晚做个好点的梦。',
    //'stop music E2_happy with fade 3',
    'i 嗯……',
    'show scene crypt_black with fadeIn duration 3s',
    'play sound cicada',
    'centered',
    's 周围又陷入一片寂静。不知何时，夜幕已深，暗紫色的湿气在月光下缓缓覆盖了整个地窖。',
    's 你轻轻站起身来，走到窗边，手掌抚过地窖冰冷的墙。',
    'i ……',
    's 你仍然在想刚才的对话。',
    's 这个世界的冈田是个机关枪一样的手作少女，比特币可以用来买土豆，长老，教皇，税，粮。抢不到的面包。',
    's 比起梦里的纯白神殿来，这个世界反而更像一场梦。日有所思，夜有所梦的，梦。',
    's 你甚至可以做自己的周公。',
    'i （梦可以解，我的处境可以解吗？）',
    'i （如果梦中都不敢触碰边界，现实怕是更密不透风……）',
    'i （可谁又说得清自己是梦到了牢笼，还是在牢笼的梦中呢？）',
    's 窗外忽然传来一阵嘈杂。',
    'show character swb normal',
    'swb 我说你买这么多酒不太好吧……喝多了怎么干活？',
    'hide character swb',
    'show character swa normal',
    'swa 瞧你说的！好不容易喝酒给报销，那还不得喝他个金戈铁马气吞万里如虎~~~',
    'hide character swa',
    'show character swb normal',
    'swb 也是，神殿里干得好好的，非把我们调来这个地方看这些农民，晦气。',
    'hide character swb',
    'show character swa normal',
    'swa 要我说，借他们十个胆子也跑不了！',
    'hide character swa',
    'show character swb normal',
    'swb 你记得给下午那小子倒一杯，他那个烟还真不错，我一闻就知道是好烟。',
    'hide character swb',
    'show character swa normal',
    'swa 那怎么行？他只要一天关在这，咱们就能享一天大爷的福。',
    'swa 这种人最会蹬鼻子上脸，你越满足他，他越不听话！想当年我……',
    'hide character swa',
    'show character cma normal',
    // cma从背后拍玩家肩膀
    'play sound click_button',
    'cma (从背后拍你肩膀）哎！',
    'i 你干嘛！吓死我了！',
    'cma 嘘……你听到他们说的什么了吗？',
    //插入选项，选择没听到跳转至【2-1】，听到跳转至【2-2】
    'play sound choices',
    {'Choice':{
        'Dialog': 's 你要怎么回答？',
        'no': {
            'Text': '没有听清',
            'Do': 'jump E2-S2-1',
        },
        'yes': {
            'Text': '听得一清二楚',
            'Do': 'jump E2-S2-2',
        },
    }},
  ],

  /**
   * ====================================
   *【2-1】S2-1
   * ====================================
  **/
  'E2-S2-1':[
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE2);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
    'i 没有啊？他们说的什么啊？',
    'cma 好吧，我以为你也在留神听他们说话呢，算了……',
    'i 哈哈，我打算睡觉了。',
    'hide character cma',
    's ……',
    's 你其实听得很清楚。',
    's 你知道你听得很清楚。',
    's 她也知道你听得很清楚。',
    'i （我不知道为什么自己会说谎，谎言好像就这么自己生长了出来……）',
    'i （……我不知道，也许这是设定好的。）',
    'jump E2-S4-1',
    //跳转到【4-1】

  ],

  /**
	 * ====================================
	 *【2-2】S2-2
	 * ====================================
	 **/
  'E2-S2-2':[
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE2);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
    'i 听到了，哈哈，平科的算盘可是打到伤心太平洋了！',
    'cma 要我说，这种人一辈子都在争当镰刀，最后才发现自己原来是棵韭菜。',
    'i 要是一辈子没发现也还好，永远青葱，永远斗志昂扬。',
    'cma 你也不想想，平科要是真把马屁稳稳地拍到了那几个看门的臀大肌上，每天多拿几个面包，最后饿肚子的是谁？',
    'i 要是轮到我头上只能挨着呗，还能怎么办。',
    'show character cma glance',
    'cma 其实不是没有办法……',
    //插入选项，打哈哈跳转到【3-1】，询问跳转到【3-2】
    //可以设计一个精妙的倒计时选项
    'play sound choices',
    {'Choice':{
        'Dialog': 's 你要怎么回答？',
        'no': {
            'Text': '开始打哈哈',
            'Do': 'jump E2-S3-1',
        },
        'yes': {
            'Text': '继续询问',
            'Do': 'jump E2-S3-2',
        },
    }},

  ],


  /**
	 * ====================================
	 *【3-1】S3-1
	 * ====================================
	 **/
  'E2-S3-1':[
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE2);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
    'i 哎，你刚才不是说要睡了吗？',
    'show character cma not_care',
    'cma 这你问埃莱娜，她不给我毯子盖，我冻得睡不着。',
    'cma 不过你不也没睡？',
    'show character cma glance',
    'cma 我猜，你在想那件事。',
    'i 那件是哪件事？你们怎么说话都跟指示词造句似的。',
    'cma 我一直在观察你……',
    'i 我去，变态偷窥狂啊！',
    'show character cma normal',
    'cma 我说认真的，你虽然话不多，但跟其他人不一样。',
    'i 对对对，我们不一样，我是张亮麻辣烫，你喝口热汤赶紧睡吧。',
    'cma 其实我是想说……',
    'i 你不睡我睡了。',
    'cma 好吧，明天记得早点起，早上那轮发的面包比较新鲜，你需要的话我也可以帮你拿。',
    'i 那谢谢您嘞！晚安！',
    'hide character cma',
    's 那个身影躺下去，周围又回归了平静。',
    's 但好像有一双眼睛沉默地站在背后，审视着刚才插科打诨的你。',
    'i （我不知道自己为什么会开始开玩笑，嘴巴好像不受控制地逃离那个话题……）',
    'i （……我不知道，也许它是设定好的。）',
    'jump E2-S4-1',
    //跳转到【4-1】 
  ],

  /**
	 * ====================================
	 *【4-1】S4-1
	 * ====================================
	 **/
  'E2-S4-1':[
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE2);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
    'show scene #000000',
    's ……',
    's 你在提防些什么？',
    's 你不需要同伴么？',
    'i （……有同伴也许是好的，但我真的体会过同伴的滋味吗？人一定要行动才会有同伴吗？）',
    'i （如果不登山，山在那里，我们都是望山人，我们会一直站在一起。）',
    'i （但如果开始登山，一旦你停在山腰，她躲进山洞，我要上到山顶，那么接下来我将无人相伴，只有山岗孤寂。）',
    's 可至少你们都触碰过了同样恒久坚硬的质料。',
    'i （然后呢？高处不胜寒。）',
    'i （我也必须重新踩在柔软的土地上不是吗？）',
    'i （我也总会回到柔软的土地上不是吗？）',
    //插入选项，站在人群跳转到【5-1】，独自上山跳转到【5-2】
    'play sound choices',
    {'Choice':{
        'Dialog': 's 你要怎么做？',
        'no': {
            'Text': '站在人群中',
            'Do': 'jump E2-S5-1',
        },
        'yes': {
            'Text': '独自上山',
            'Do': 'jump E2-S5-2',
        },
    }},
  ],

  /**
	 * ====================================
	 *【5-1】S5-1
	 * ====================================
	 **/
  'E2-S5-1':[
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE2);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
    'i （我为什么不一开始就选择站在人群中？）',
    's 也许如此，至少你在人群中有批判山风的自由。或者听众。',
    'i （也许如此，至少许多人都看到了风的颜色，我们是沉默的同伴。）',
    'jump E2-S6-1',
    //跳转到【6-1】
  ],

  /**
	 * ====================================
	 *【5-2】S5-2
	 * ====================================
	 **/
  'E2-S5-2':[
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE2);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
    'i （我为什么不一开始就选择一个人上山？）',
    's 你其实知道自己想要的仅仅是纯粹地呼吸。这与任何人无关。',
    'show scene crypt_black with fadeIn duration 3s',
    'play sound cicada', 
    's 地窖阴冷的黑暗中，你开始默默等待着。',
    'show character swb normal',
    'swb 哈哈哈……嗝，我去你大爷的，满嘴喷粪！',
    'swb 老子亲眼看见你进……进去了！',
    'hide character swb',
    'show character swa normal',
    'swa 怎么，你也想试试？等咱这轮干完哥带你去，嘴巴管严点，别叫我家领导发现……',
    'hide character swa',
    'show character swb normal',
    'swb 那还……那还用说，有乐子自己藏着，算什么男人？',
    'hide character swb',
    's 背靠灰色的墙，粗鄙看管着沉默。',
    's 粗鄙往往是可靠的。',
    's 粗鄙是重力加速度，借助它，小石子随机砸死路人。',
    's 在粗鄙获得支付的年岁，无法想象文明。',
    'i （甚至可以用移动支付。）',
    'show character swb normal',
    'swb 你接着喝，我去下茅厕。',
    'hide character swb',
    'show character swa normal',
    'swa 去去！我给你喝光！',
    'hide character swa', 
    's ……',
    's ……', 
    'play sound snore',
    's ……',
    's 无声的钟摆开始运动。',
    's 你知道这也许只是个梦。',
    's 你知道在这个梦中，地窖之外的一切于你而言都是陌生的。你是梦的新生儿，眼前的一切就是你的认知极限。',
    's 在这里，你的生活只是受到了适度的节制。你没有饿死，也没有冻死。你甚至可以假设，死又何妨？',
    's 冈田还在这里，穿着你逐渐开始熟悉的斗篷，那些明白正在发生什么的村民也在这里。',
    's 未来同样既未知又可知。他们怎么就可以忍受？你为什么不能？',
    //插入选项，等待跳转到【6-0】，逃出跳转到【6-2】
    'play sound choices',
    {'Choice':{
        'Dialog': 's 你要怎么做？',
        'no': {
            'Text': '等待',
            'Do': 'jump E2-S6-0',
        },
        'yes': {
            'Text': '出逃',
            'Do': 'jump E2-S6-2',
        },
    }},
  ],
/**
	 * ====================================
	 *【6-2】S6-0
	 * ====================================
	 **/
   'E2-S6-0':[
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE2);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
    'i （我还可以忍受。）',
    'jump E2-S6-1',
  ],

  /**
	 * ====================================
	 *【6-2】S6-2
	 * ====================================
	 **/
  'E2-S6-2':[
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE2);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
    'show scene #000000',
    'i （我不能忍受了。）',
    'i （再见，粗鄙。）',
    'i （再见，沉默。）',
    's Adieu, Adieu.',
    'play sound notification',
    'show message Ending-E2leave_alone',
    'end'
    //结局
    //跳转回【原时间线】，从早就打探好的连接工厂库房的窄洞逃出小区，在外呆了三天，红码莫名其妙地消除了。
  ],

  /**
	 * ====================================
	 *【3-2】S3-2
	 * ====================================
	 **/
  'E2-S3-2':[
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE2);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
    'i 什么办法？',
    'show character cma normal',
    'cma ……你有没有注意到，那两个看门的买了多少酒？',
    'i 买再多咱们也喝不着。',
    'cma 我不是这个意思，你应该也看出来了，酒是我们的机会……',
    'cma 他们现在还只是派这两个酒鬼来看地窖，后面如果真的进了神殿，守卫可就远远不止于此了。',
    'i 教皇的住所，当然得戒备森严。',
    'cma 我看他们今天专门买酒庆祝，应该是这份差事就要结束了，最后的机会可能就是今晚。',
    's 对话已经到了短兵相接的地步。',
    'i 嗯，我懂你的意思。',
    'i ……其实我下午就想说，我怀疑我们村看到的所谓神迹，很有可能是火山爆发的前兆。',
    'i 木柴自燃，还有硫磺味，我梦到的大火可能是一个预言。',
    'i 如果现在疏散，也许大家还有活路。',
    'cma ……',
    'cma 你有几成把握？',
    'i 看你有几成信我。',
    'cma 我信你有什么用？这些看门的谁会信你？',
    'i 看门的不会信我，但村里的大家信我就够了。',
    'cma ……',
    'show character cma glance',
    'cma 我没空管这么多，人各有命，平科那种人的命我可管不着，我只问你今晚走不走？',
    'hide character cma',
    'show character pink normal',
    'pink 你们俩大半夜嘀嘀咕咕点什么呢？',
    's 平科的声音忽然从身后传来。',
    'hide character pink',
    'show character cma normal',
    'cma 呃……',
    'hide character cma',
    //插入选项，回答跳转到【7-1】，不回答跳转到【7-2】
    'play sound choices',
    {'Choice':{
        'Dialog': 's 你要怎么回答平科？',
        'no': {
            'Text': '如实回答',
            'Do': 'jump E2-S7-1',
        },
        'yes': {
            'Text': '编造借口',
            'Do': 'jump E2-S7-2',
        },
    }},

  ],

/**
 * ====================================
 *【7-1】S7-1
 * ====================================
 **/
  'E2-S7-1':[
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE2);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
    'show character pink normal',
    'i 我们在说火山的事。',
    'pink 哦？',
    'i 我怀疑我们村看到的神迹，其实是火山爆发的征兆……',
    'pink 啊？这么大的事，得告诉教皇啊！',
    'pink 守卫大哥！守卫大哥！',
    'hide character pink',
    'play sound footsteps',
    'show character swa normal',
    's 两个守卫的脸齐齐从地窖的铁门背后冒出来。',
    'swa 干啥，别吵我们喝酒！',
    'hide character swa',
    'show character swb normal',
    'swb 她说的那些我都听到了，但这有什么？不过是没有根据的谣言罢了。',
    'swb 我们国家只有唯一的圣女有真正的预言能力。这年头想冒充圣女的人太多了，哈哈哈哈哈……',
    'i 不，这不是个预言，这是完全可能发生的事，这是科学……',
    'hide character swb',
    'show character swa normal',
    'swa 害！什么科学不科学的？你们关在这，我们有酒喝，这就是科学！',
    'hide character swa',
    'show character swb normal',
    'swb 好了，都去睡觉吧，再传播谣言，妖言惑众我就不客气了。',
    'hide character swb',
    'show character pink normal',
    'pink 都听到了吗？你们俩也别在这搞小动作了，守卫大哥让我们睡觉呢，是吧！',
    'pink 这酒还是都留给二位，我孝敬二位的烟草不图回报！',
    's 你看着平科那张布满谄媚皱褶的脸，突然泛起一阵恶心：是啊，这种人的命，和你有什么关系？',
    'show scene #000000',
    'i （我管不着……）',
    'jump E2-S6-1'
    //跳转到【6-1】
  ],

/**
 * ====================================
 *【7-2】S7-2
 * ====================================
 **/
'E2-S7-2':[
  {'Function':{
    'Apply': function () {
      setTextBoxCSS(textBoxE2);
    },

    'Reverse': function () {
      setTextBoxCSS(textBoxDefault);
    }   
  }},
  'show character pink normal',
  'i ……我们说你给守卫送的烟一点儿用都没有。',
  'pink 你懂什么？这叫……这叫今儿栽树，明儿乘凉，十年树木，百年树人！',
  'i 好好好，你就是周树人再世，我们有眼无珠。',
  'hide character pink',
  's 平科嘟嘟囔囔地躺下了。',	
  'show character cma glance',
  'cma ……',
  'hide character cma',
  's 你和这个不知名姓的同伴在黑暗中交换了一个眼神，便陷入了沉默的等待。',
  's 不知为何，人们在真正四目相对的时刻就不再需要面容，真正互相召唤的时刻就不再需要语言。',
  'play sound snore',
  's 不知道过了多久，门外有鼾声传来。',
  'show character cma glance',
  's ……',
  'hide character cma',
  's 你们再次交换了一个眼神，便应声而动。',
  'play sound door_slam',
  'play music E2_burning with loop fade 3 volume 50',
  'show character pink normal',
  'pink 哈哈！你们果然有鬼！',
  'pink 守卫大哥！这俩人想跑！别让他们溜了！',
  'hide character pink',
  'play sound footsteps',
  's 醉醺醺的黑影蓦地堵住了出口的窄门。',
  'i （怎么办……）',
  'play sound door_slam',
  'show scene #000000',
  's 还没等你反应过来，背后忽然一记闷棍的疼痛传来，你眼前一黑。',
  's ……',
  's ……',
  'play sound burning with loop',
  'i ……',
  's 再次醒来时，仍是木柴劈劈啪啪的声音，不过此时，它燃烧在你的脚下。',
  's “你们这被咒诅的人，离开我！”',
  'stop music E2_burning with fade 7',
  'stop sound burning with fade 3',
  's “进入那为魔鬼和他的使者所预备的永火里去！离开我！离开我！”',
  'play sound notification',
  'show message Ending-E2traitor',
  'end',
  //结局
],

  /**
   * ====================================
   *【6-1】S6-1
  * ====================================
  **/
  'E2-S6-1':[
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE2);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
  's 你一夜无梦。',
  //【跳转到时间线界面】
  //【第二天】
  'play sound bird',
  'show scene crypt with fadeIn duration 3s',
  's 第二天。',
  'show character elena normal',
  'elena 起床了起床了！',
  'i 好好好。',
  'i 话说冈田……那个，埃莱娜，你知道圣女是什么人吗？',
  'elena “圣女出，天下和”，这句话你不会没听过吧。',
  'i 但到底为什么呢？',
  'elena 我也不知道，有的说她懂得预言，有的说她有精神净化能力、麾下有一支幽灵军，还有人说她的财富足以匹敌所有皇室。',
  'i 这么神的吗……',
  'elena 但谁也没有见过圣女，也不知道她的能力究竟有多大，只是大家都坚信有这样一号人物存在。',
  'elena 隔三岔五倒经常有人站出来声称自己是圣女，但到现在也没谁能真正通过神的检验……',
  'i 那，你觉得圣女真的存在吗？',
  'elena ……要我说，无论她是真是假，这个年头“相信她存在”本身总是件好事。',
  'hide character elena',
  'play sound footsteps',
  'play sound crowd_whisper with fade 2',
  's 你们正说着，地窖里忽然传来一阵骚动。',
  'show character swa normal',
  'swa 大家静一静，静一静。',
  'swa 各位神迹的见证人，经过漫长的等待，今天你们终于得以进入神殿，觐见尊敬的教皇。',
  'swa 这段日子我们朝夕相处，也积累了深厚的感情，在这告别的时刻，愿克维德神的恩典与你们同在。',
  'hide character swa',
  'show character elena normal',
  'elena ……狗屁感情。',
  'i （狗屁恩典。）',
  'play sound footsteps',
  'show scene village with fadeIn duaration 3s',
  'centered',
  's 你们跟随着守卫鱼贯而出，最后望了一眼清晨宁静的城镇，然后登上了几辆早早在门外等候的木质货车。',
  'show scene #000000',
  's 每辆车都由四匹高大的马拉着，车夫戴着低低的兜帽，看不清面容。你们在封闭而颠簸的车厢一路沉默，不知道沿途的情形。',
  'play sound footsteps',
  's 又不知过了多久，马车再次停下，你们穿过许多错综的走廊，最后被引入一处宽阔的大厅。',
  'centered',
  'play music E2_danger with loop fade 3 volume 50',
  'show scene redhall with fadeIn duration 3s',
  'centered',
  's 罗曼式到哥特式过渡的典范，立面凝重，拱顶消瘦，玫瑰花窗的菱形玻璃透射深深浅浅的红。',
  //转换场景到红厅
  'show character elena normal',
  'elena 原来这就是神殿的红厅啊……呃……好……好红。',
  'hide character elena',
  'show character cmb normal',
  'cmb 嘘！主教大人来了。',
  'hide character cmb',
  'show character hyzj normal',
  'centered',
  'hyzj 敬爱的兄弟姐妹们，请听我一言。',
  'hyzj 在共同的信仰中，我们获得力量与智慧。我们齐聚于此，欢庆克维德神的恩典和仁慈，虔诚地为神迹留下最可宝贵的叙述。',
  'hyzj 此刻，让神的双眼成为诸位的双眼，神的喉舌成为诸位的喉舌。克门。',
  'zcm 克门。',
  'hide character hyzj',
  'i ……',
  's 虽然你没完全明白他在说什么，但村民们不知为何都开始安静自觉地排成一列，一个个轮流进入神像前的斗室。',
  'show character lpsg normal',
  'centered',
  's 穿着蓝色教袍的神官在旁边用沙漏计时，得体地轻声问候每个走出斗室的村民。一切肃穆得像古战场凝固的血。',
  'hide character lpsg',
  's 你也只好低头默默排进队伍里。队列缓慢而规律地吐纳，让你莫名想起白细胞清扫病毒的纪录片。',
  'i （白细胞的神是谁呢？）',
  's 人是偏爱线性的，队列就是其中一种。无论最初的动因多么随机，队列稳定地累积呼吸，一串人珠。',
  'i （排队没手机玩真是满清十大酷刑……）',
  's 又不知等了多久，总算轮到了队尾的你。',
  'play sound click_button',
  's 你紧张地咽了咽口水，掀开眼前沉重的挂帘，走进斗室。',
  'show scene #000000',
  'stop music E2_danger with fade 3',
  'i （我靠，怎么这么黑啊，这就是黑科技吗……）',
  's 黑暗有一种性格，只有当你融化进黑暗，黑暗才会离开你。此刻，你唯一的选择是与残废的感官相拥而泣。',
  's ……',
  'i （……还没有结束吗？）',
  'i （我是不是该说点什么？）',
  's 可你什么也没看见，什么都没听见啊。',
  's 神的双眼不是你的双眼，神的喉舌并非你的喉舌。',
  'i ……',
  'lpsg 时间到了。',
  'play music E2_danger with loop fade 3 volume 50',
  'show scene redhall with fadeIn duration 3s',
  's 你匆忙掀开挂帘，主教已经面向村民们站定，红厅幽深光线的映照下，那如簧的巧舌又开始运作。',
  'show character hyzj normal',
  'hyzj 我敬爱的兄弟姐妹们，诸位的讲述如神降甘霖已将干涸的大地浸润，信者的舌上岂有不义？',
  'hyzj 克维德之光明如悬日于海，诸位即是海上撷取片彩的水手，使那虔诚的，仁慈的，归顺的子民得以一瞥。',
  'hyzj 经典有言，舌若弯起如弓，便是为要说谎话，不行诚实；舌若偏愎如箕，便是为要作狂傲，不行谦逊。',
  'i （这是什么主教申论吗？好像什么都说了，又好像什么都没说，多半是在今日头条培训过。）',
  'hyzj ……舌头在百体中最小，却能做大患处，如小火苗能点燃整片树林。生死在舌头的权下，喜爱它的，必吃它的果子。',
  'hyzj 若有人自以为虔诚，却不勒住他的舌头，反欺哄自己的心，这人的虔诚是虚的。',
  'i （他说得我好想吃牛舌啊……）',
  'i （学校对面广场那家料理店叫什么来着，那家烤牛舌可真是惊为天人……天牛……天舌啊。）',
  'i （上次还放话说改天带全寝去吃，将牛舌教传遍东急，做老板娘背后的女人，现在不知道店还在不在……）',
  'i （到底是谁第一个发现牛舌可以吃的，不会觉得很对不起牛吗？）',
  'i （好想问一下他们知不知道这种吃法啊啊啊，说不定我就是那个穿越过去发明了烤牛舌的中世纪厨神！）',
  'hyzj ……于诸位敬爱的姐妹弟兄，口中三寸之舌已达成此世之大宿命，即将克维德神之显现吐露为仁慈的法则。',
  'hyzj 诸位何其有幸能将火种布下，从此做恪敬守道的圣者；诸位何其有幸不受口中虺蛇的诱引，背向喉咙那敞开的坟墓，',
  'hyzj 诸位何其有幸脱去一切的污秽和盈余的邪恶，存温柔的心领受那所栽种的道……',
  'stop music E2_danger with fade 3',
  's 你从不受打扰的遐想中忽然意识到，地窖里村民们的叽叽喳喳曾让你整日不得安宁，而现在他们的脸却像一尊尊倒放的瓷器，主教的车轱辘话无不安稳驶过。',
  'i （话说从来了这个大厅以后大家就都很奇怪，安静得不行……）',
  's 所以话语的尊严都是在沉默中显现吗？还是沉默是人最后的自尊？',
  's 你打了个寒颤，主教方才的言语忽然浮上脑海。',
  'i （却不勒住他的舌头，反欺哄自己的心……欺哄自己的心……）',
  'i （等等……怎么有点耳熟？）',
  'i （对了，这不是我梦里那个恐怖的背景音吗！）',
  'i （当时我嘴里，确实，没有，舌头。）',
  'play sound click_button',
  's 你狠狠咽了口水，舌头反射一般蜷缩起来抵住了上颚，那一小团空气顿时受到挤压，开始在口中膨胀。',
  'i （这千真万确是我的身体，吗？）',
  'hyzj ……自此，诸位便可永远安心侍奉了！',
  's 主教的布道戛然而止，你还来不及思考，神官已经将村民们一一带下，开始向他们嘴里涂抹一种不知名的黑色药膏。',
  'hyzj 吾众领受克维德神的教化，取至上等香料制成膏油，敷之可在成圣路途免受苦楚。诸位，请受膏吧。',
  'hide character hyzj',
  'i （等等，怎么大家脸上都有一种谜之安详？这涂的究竟是什么！） ',
  'show character lpsg normal',
  's 手持膏油的神官已经来到你面前。',
  //插入选项，反抗跳转到【8-1】，沉默跳转到【8-2】
  'play sound choices',
    {'Choice':{
        'Dialog': 's 你要怎么做？',
        'no': {
            'Text': '反抗',
            'Do': 'jump E2-S8-1',
        },
        'yes': {
            'Text': '沉默',
            'Do': 'jump E2-S8-2',
        },
    }},

],

/**
 * ====================================
 *【8-1】S8-1
 * ====================================
 **/
'E2-S8-1':[
  {'Function':{
    'Apply': function () {
      setTextBoxCSS(textBoxE2);
    },

    'Reverse': function () {
      setTextBoxCSS(textBoxDefault);
    }   
  }},
  'i 请、请等一下！',
  'hide character lpsg',
  'i 我有个问题。',
  'show character hyzj normal',
  'hyzj 请讲。',
  'i （快，快，想句话出来。）',
  'i 我想问清楚，当真是克维德神的旨意，要您割掉我们见证者的舌头？',
  'hyzj 我已阐明，诸位留下最后的言语，应是与神直接的对话，此为至义，日后必是先升上去的。',
  'play sound crowd_whisper with fade 2',
  'zcm ……',
  'hide character hyzj',
  's 你看向一旁，村民里的有些人交换着羊羔一样的眼神，好像在窃喜你已经失去了“升上去”的优先权。',
  'show character elena normal',
  's 在另一旁，埃莱娜默不作声地立着，她有一张总是因不解而略显怒气的脸。',
  'hide character elena',
  'show character hyzj normal',
  's 你的面前是主教和神官愚蠢又装模作样的大鼻子。',
  'hide character hyzj',
  'i （要怎么跟这帮中世纪的人科普火山预警常识啊……）',
  's 唔，看来我们的马尔泰·若曦有时需要一些 Völuspá 的智慧呢。',
  'i ……', 
  'play music E2_danger with loop fade 3 volume 50',
  's 你从众人中站出身来，行云流水地完成了白眼、popping、花手的预言家三件套，然后开始了表演。',
  'i 诸位，且听我言，神圣的旧事，昔日的巨人，海滨的圣山，九棵巨树的根，万古之河。',
  'i 赐福从来也是警戒，女王从东方投掷太阳，在我们头顶，在我们脚下，地，气，水，火。',
  'i 有限的细数所得，无限的无知亦无为，令众王各归其座。',
  'i 而升上去的将要下来，巨人在赌桌上轮转同一批金子。',
  'i 他的女儿在宫殿里三次烧死，三次复活；她的骨在空气中从未下落。',
  'i 她赐予农齐亚的土壤不再肥沃，她要再去火中锻造一枚戒指。',
  'i 她的骑士横跨在圣山上，头顶着懦夫的狂热。',
  'i 铁锈红的鸟即将覆盖灰原，而那该沉默的的张口鸣叫。',
  'i 明亮的大蛇吞吐云雾，炽热的晨星跃入黑夜，岩石融化成为泡沫。',
  'i 土地将在海浪中重新崛起，泛绿的符文将嵌在悬崖的脊背。',
  'i ……',
  's 跳预言家以后通常要面临对跳和扛刀，但在这个莫名其妙的游戏里，你也不知道自己是不是、该不该、能不能做这个预言家。',
  'stop music E2_danger with fade 3',
  's 你只是觉得，活人不能给话憋死。真相在说出来后也许是可能性的艺术，在说出来前永远是一个巨大的、不自知的、吞没一切的〇。',
  'play sound crowd_whisper with fade 2',
  'zcm ……',
  's 人们开始骚动了，但表现形态是一种模糊的嗡嗡声。',
  'show character hyzj normal',
  's 红衣主教土豆状的脸仍看起来不动声色，但守卫按在剑柄上的手指快要发绿了。',
  'hide character hyzj',
  's ——仿佛高压锅里隐晦的对峙。',
  'centered',
  'show scene #000000',
  'show character lpsg normal',
  'centered',
  'play music E3_a_cut_in_love with volume 50',
  's 但在任何变化发生之前，你很快就被“隐晦”地护送了下去。',
  's 昏暗的地下室里，神官捧出一本泥金的册子，熟练地念道——',
  'lpsg 克维德神学会于此谕知：尔乃违反了经文教义，散布不实之言，煽动信众情绪。故本会特为尔制订训诫书，以资惩戒。',
  'lpsg 尔故作通晓预言，行为未能符合教徒身份，本会深感痛心。',
  'lpsg 如今正值信仰动荡之际，须要一切信徒齐心协力，维护教会安宁。尔未能履行信徒的责任，诚属不当之举。',
  'lpsg 本会特此训诫：尔须认识到信徒的身份，行为当遵从教义，不得妄自尊大，违背神的旨意，伤害信徒情感，能否做到？',
  'lpsg 如尔再有类似行为，必将受到更加严厉的惩罚，是否明白？',
  'show character lpsg mock',
  'lpsg 本训诫书自颁布之日起生效，望尔能以此为戒，改过自新，恪守教义。',
  'hide character lpsg',
  's 四下昏暗。在摇曳的烛火和在四把短剑的反光中，你按下了手印。',
  'jump E2-S9-1',
  //跳转到【9-1】
],

/**
 * ====================================
 *【8-2】S8-2
 * ====================================
 **/
'E2-S8-2':[
  {'Function':{
    'Apply': function () {
      setTextBoxCSS(textBoxE2);
    },

    'Reverse': function () {
      setTextBoxCSS(textBoxDefault);
    }   
  }},
  'i ……',
  's 你在体会一种很新的无语，对方操持的语言如此系统（而扯淡），以至于你无法找出沟通的可能性。',
  'i （苍蝇叮不了无缝的蛋。）',
  'i （何况还是乌鱼蛋。）',
  'show scene #000000',
  's 黑色的药膏传来清凉的触感。很快，你就不再感到其他来自口腔的知觉。',
  //跳转到【9-1】
  'jump E2-S9-1'
  
],


/**
 * ====================================
 *【9-1】S9-1
 * ====================================
 **/
'E2-S9-1':[
  {'Function':{
    'Apply': function () {
      setTextBoxCSS(textBoxE2);
    },

    'Reverse': function () {
      setTextBoxCSS(textBoxDefault);
    }   
  }},
  's 你最后还是失去了舌头。',
  //转换场景到蓝厅
  //lpsg：蓝袍神官
  'centered',
  'play music E2_danger with loop fade 3 volume 50',
  'show scene bluehall with fadeIn duration 3s',
  'centered',
  's 再次睁开眼时，你仿佛置身海底，洁白的光在深蓝色的石壁上跳动。大厅的景象与红厅别无二致，只是全以蓝色筑成。',
  's 你沉默地望向四周。保持沉默和只能沉默还是不同的，人的器质在潜意识里追求功能的统一。',
  's 过去的数十个小时，你发现自己的感官逐渐退化成鮟鱇的形态，非必要不视，非必要不听，非必要不生活。',
  'i （呀掰，现在真变成单机游戏了……）',
  'i （等等，什么时候周围只剩下女人了？）',
  'play sound footsteps',
  'show character lpsg normal',
  'lpsg 咳咳！',
  'lpsg 各位女士，各位贵妇，各位小姐，各位尊敬的圣女candidate们～',
  'lpsg 欢迎大家来到我们的蓝厅，为了纪念这特殊的一刻，在此特赋《蓝厅集序》一首~',
  'lpsg 查理十年，岁在壬寅，雾月之初，会于克维德山阴之蓝厅，修禊事也。群贤毕至，少长咸集。',
  'lpsg 此地有Bible Organ，圣坛祭台；又有薰香烛油，映带左右，引以为和方检测，列坐其次。',
  'show character lpsg mock',
  'lpsg 虽无红颜白发之盛，一戳一验，亦足以畅叙幽情~',
  'i （什么东西啊……给我整不会了……）',
  'show character lpsg normal',
  'lpsg 各位，言归正传～我们单位，啊呸，我们这个神殿的主要职责就是找到传说中的圣女～',
  'lpsg 上头今年的指标是好歹有十个候选人，后面再择优录取。好家伙，这都快到年底了，还没凑到数，还好各位来得及时，我可想死你们啦！',
  'lpsg 那我们这儿的常规工作呢，就是和方检测。',
  'lpsg 什么是和方检测呢？就是用这把方形的小烙铁在各位脑门儿上这么一戳！嘿，大家伙儿额头上就能立马现出一个鲜红鲜红的印子～',
  'lpsg 这原理呢，各位能懂几成是几成～上头文件发下来，说只有真正的圣女能保持这检测产生的红印子不发黑。',
  'show character lpsg mock',
  'lpsg 这玄乎事体咱也弄不明白，总之上头怎么说咱就怎么办，各位好生配合就是了！~',
  'hide character lpsg',
  'i （大哥，那叫结痂，血小板参与的上皮再生。）',
  's 你们听完这段奇特的发言，默默地排成一列，开始等待接受和方检测。',
  'show character lpsg normal',
  's 蓝袍神官的衣袍整洁，一丝不苟，手中的烙铁也光滑平整，干净利落。',
  's 先用黑色液体涂抹受试者额头，使其清凉舒爽；随后手持烫红的烙铁，认真检查温度；最后对准眉心按压，大功告成。',
  'hide character lpsg',
  'show character elena test',
  'elena ……',
  'i （这不是渣滓洞上刑吗，感觉很痛的样子，怎么大家一声都不吭？）',
  'hide character elena',
  'show character lpsg normal',
  'lpsg 下一个。',
  's 你惴惴不安地走向神官。',
  'i ……',
  'i （嘶……这个消毒水是什么成分，百忧解吧！这辈子都没见过这么强力的麻药，会不会对人体有害啊？我得想办法带点回去研究一下……）',
  'show character lpsg mock',
  'lpsg 哎呀呀，可爱的小姐，您怎么直皱眉头呀，是不是我这厢下手重啦？',
  'lpsg 您有意见尽管提嘛～我们这都是为大家服务，大家满意才是皆大欢喜！',
  'i 唔……唔唔……',
  'i （呵呵，说的好像我能说出半个不字一样。）',
  'hide character lpsg',
  's 你们众人不到半日便完成了检测指标。',
  'show character lpsg mock',
  'lpsg 这下得跟大家告别啦，各位圣女候选人接下来将转移进神殿的核心，也就是白厅~',
  'lpsg 那可是修女嬷嬷三班轮倒日夜不休净化出来的白厅啊！我真是羡慕得紧！',
  'show scene #000000',
  //场景转换到白厅
  's 夜幕降临后，你们被引入了白厅，很快进入了不安的睡眠。',
  's ……',
  'show scene whitehall with fadeIn duration 3s',
  's 第二天。',
  'show character elena dark',
  's 你被埃莱娜摇醒，发现她额头的红印已经开始渐渐发黑。',
  'elena 呜……呜。',
  's 你竖起拇指，又犹豫地弯了下去。',
  's 你指着自己的额头，想知道印记的情况。',
  'elena （抿着嘴唇，轻轻地点头，又缓慢地摇头）',
  'hide character elena',
  'i （是啊……正常人怎么可能一直不结疤呢？）',
  'play sound footsteps',
  'show character bpxn normal',
  'centered',
  's 窸窸窣窣一阵长袍的声响，你抬头，只见白厅的修女们周身白色，只露一双眼睛，在纯白的大厅里快速移动。',
  'hide character bpxn',
  'i （好像晴天娃娃成精了。）',
  'i （不对，更像有人在走私大理石雕。）',
  's 你被自己的胡思乱想给逗笑了，咧开嘴角的时候才发现这块肌肉好久没有活动过了。',
  's 沉寂的大厅里忽然响起一阵尖利的哭声。',
  's 不，与其说是哭声，不如说是一种鸟类的鸣叫。你考察萎缩的湿地时曾经见过这种鸟，在无边无际的泥泞里，它们挤满唯一的树冠。',
  's 晴天娃娃们正拉扯着三个女孩，将她们从大厅中带走。',
  's 她们额头上的印记已经完全愈合，不再渗血。换句话说，她们因为过强的凝血功能失去了所谓圣女候选人的身份。',
  'i （太扯淡了。）',
  'show character elena dark',
  's 你和埃莱娜交换了一下眼神。她走了过来，然后轻轻地拍你的背，一下，两下，像一种计时的机械。',
  's 不知为何，在这种对时间的微弱掌握中，你感觉自己强大了一些。',
  'show scene #000000',
  's 天光渐暗，白色的墙面彼此反射着微弱的日光，白色仿佛互相扶持，但一切还是渐渐地灰了下去。',
  's ……',
  'show scene whitehall with fadeIn duration 3s',
  's 第二天。',
  'play sound footsteps',
  'show character bpxn normal',
  's 今天你是被修女摇醒的。她们三三两两分布在床铺之间，安静地看着刚起床的女孩们。',
  'hide character bpxn',
  'i （圣女也是有起床气的啊！）',
  'i （这样盯着让人怎么做事！）',
  'i （不过我好像也无事可做。）',
  'i （所以现在到底是要干嘛？）',
  'i 唔……',
  'i （有没有人能说句话啊……虽然我是说不出来。）',
  'i （我看看，如果不是无实物表演的话，那么现在的道具就是床上这套麻布袍子。）',
  'show character cma branded',
  'cma ……',
  'hide character cma',
  'show character cmb branded',
  'cmb ……',
  'hide character cmb',
  'i （嗯，然后大家都在换衣服。）',
  'i （应该是要等所有人都准备好？）',
  'i （总不能一直在这个屋子里呆着吧。）',
  'i （那里有一扇门。等等，怎么有点像密室逃脱？）',
  'i （不过估计打开门了也逃不脱就是了。）',
  'i （我先观望一下……欸，有人往门那里走了！）',
  'i （貌似跟着她们就好。嗯，反正也不是我打头的。）',
  's 你慢慢发现，控制一群人好像不需要发号施令。',
  's 她们只需要注视着你，等待你自己环顾四周，自己模仿旁人，自己穿好衣服，自己走进大厅。',
  's 只有当你做了“正确”的事情，她们才会随着你移动。',
  'i （事实上，是影子控制着主人。）',
  's 你突然想起了什么，抬手摸了摸额头，感到一阵轻微的疼痛袭来，指尖仍然有些湿润的血腥。你有些负罪感地松了口气。',
  's 你又抬眼环顾四周，发现圣女候选人好像再次减少了。一、二、三……只剩下十二个了。',
  'show character cma branded',
  'centered',
  'hide character cma',
  'show character cmb branded',
  'centered',
  'hide character cmb',
  'i （可是奇怪，为什么这两位的那啥啥印记这么红？）',
  'i （明明昨天大家都在凝血啊，还可以逆转的吗……不会吧不会吧，不会真的有圣女吧，这不科学啊！）',
  's 亲爱的，在这个时空，你是泥菩萨双缝干涉——自身分裂啊，还讲什么科学呢？',
  'i （不行，我得把这事给整明白了。）',
  's 但你没有机会。',
  'show scene pray with fadeIn duration 3s',
  'centered',
  's 注视织成一张网。你和所有其他女孩一样，领圣餐，咀嚼，跪在神像前，双手合十，祈祷。',
  's 玻璃花窗透出的光斑照在神像的眼睛上，让祂显得格外肃穆沉静。',
  'i （这个家伙偷走了我的生命。）',
  //话说，没有舌头还能咀嚼吗（dbq
  'centered',
  'show scene communion with fadeIn duration 3s',
  'centered',
  's 圣餐是面包和蔬菜汤。你狼吞虎咽，但却不足以消除腹中的不愉快。',
  's 很久没吃过一顿热乎结实的正餐了，有个空洞在张牙舞爪地伸展，但却被人形束缚着。',
  's 你突然意识到饥饿与神祇在某种程度上是同构的。它们有能力毁灭一切，却潜伏在皮肤或大理石的造像中，驱使人们终日劳碌，只是为了防止它们突然破土而出。',
  'show scene #000000',
  'stop music E2_danger with fade 3',
  's 用餐完毕后，你开始闭着眼睛祈祷，逐渐进入一种半昏迷状态。',
  's ……',
  's 时间像泡沫一样漂浮在空中，不知道过去了多久。',
  'i ……',
  'i （呃，想上厕所了。）',
  'show scene whitehall with fadeIn duration 3s',
  's 你从漂浮的祈祷中睁开眼睛。',
  'i （但是直接去会不会被当作不敬啊……况且去厕所的路要穿过前面这么多人……）',
  's 你跟膀胱又博弈了半小时。',
  'i （不行了啊……再这样下去要干出更不敬的事了啊……阿弥陀佛阿弥陀佛，啊呸，我主保佑我主保佑，忍一时海阔天空……啊，海，三点水，更想上厕所了……）',
  'play sound footsteps',
  's 幸运的是，有个候选人开始举手向修女示意，一行人起身走向大殿的侧门，你连忙跟了上去。',
  'show scene #000000',
  'i （不行，我太急了，插个队没关系吧。嗯，一定没关系的。）',
  'i ……',
  'play sound peeing',
  'i ……', 
  'i ……',
  'i （……啊……舒服了。）',
  'centered',
  'play sound footsteps',
  'centered',
  'show scene E2_stairs-0-1 with fadeIn duration 3s',
  'centered',
  's 你走出阴暗的厕所，门外却空无一人。',
  's 眼前只有狭窄的白色旋转楼梯一直向下延伸，看不到底。',
  'i （神的DNA。）',
  'show scene E2_stairs-0-2', 
  's 忽然，你注意到这串DNA上长出了一块模糊的斑点。',
  'show scene E2_stairs-0-3',
  's 你抓着栏杆使劲地向下张望，但饥饿让你一阵晕眩。那个橙红色的斑点时隐时现，你简直怀疑自己产生了错觉。',
  'i （嗯？嗯？烤肉的味道？）',
  'i （谁在偷偷芭比Q啊！太可恶了！）',
  'i （还是我真的产生幻觉了？）',
  'show scene #000000', 
  's 你又回到厕所蹲下，试图从晕眩的状态中恢复过来。',
  'i （突然有了在大厂厕所摸鱼的既视感？）',
  's 你扶着墙走出隔间，最终还是继续回到神像前“上班”。',
  's ……',
  'play sound cicada',
  's 又不知过了多久，天色渐晚。',
  's 夕阳收回最后一束余晖，你从修女们逐渐频繁的走动判断出——',
  'show scene communion with fadeIn duration 3s',
  'i （要开饭了！）',
  's 然而，晚饭还是面包和菜汤。',
  'i （圣女不需要蛋白质的吗！）',
  's 你想起刚才那股烤肉味，回味般地咂咂嘴，忽然被脑海中浮现的念头惊了一跳。',
  'i （……有没有可能，那不是幻觉？）',
  's 你边啃面包，边在长桌的一侧偷偷观察起先前那个“去厕所”的女孩。',
  'show character cmb branded',
  'centered',
  'i （她的印记……好像变得更红了……）',
  'hide character cmb',
  'i ……',
  'i （原来是这样。）',
  's 你装作不经意抬手抚过额头，指尖沾染的红色已经淡得看不出来。那个印记，即使触碰也不会痛了。',
  'show scene #000000',
  'i （……看来只有这个方法了，大家也都在这么做。也许这是不成文的约定，这是唯一被默许的？）',
  //插入选项，模仿跳转到【10-1】，否则跳转到【10-2】
  'play sound choices',
    {'Choice':{
        'Dialog': 's 你要怎么做？',
        'no': {
            'Text': '模仿那个女孩的做法',
            'Do': 'jump E2-S10-1',
        },
        'yes': {
            'Text': '不模仿这种做法',
            'Do': 'jump E2-S10-2',
        },
    }},

],

/**
 * ====================================
 *【10-1】S10-1
 * ====================================
 **/
'E2-S10-1':[  
  {'Function':{
    'Apply': function () {
      setTextBoxCSS(textBoxE2);
    },

    'Reverse': function () {
      setTextBoxCSS(textBoxDefault);
    }   
  }},
  'show scene #000000',                                                                                                                                                                                                                                                                                                                               
  'i （还是保命要紧，先保住印记不发黑，其他走一步看一步吧。）',
  'show character bpxn normal',
  's 临睡前，你拉住了一位修女的衣角，向旋转楼梯的方向指去。',
  's 她心领神会。',
  'hide character bpxn',
  'play sound footsteps',
  'show scene stairs with fadeIn duration 3s',
  'centered',
  's 所谓的“二次检测”毫无止痛措施，你狠狠抓住栏杆，才没让自己叫出声来。鲜血混杂着滚烫的灼烧，令人几欲昏厥。',
  's 但是还好，血又流了下来。',
  's 你抬起沾血的手，看着因用力而发青的指节。',
  'i （真是色彩浓郁的身体呢。）',
  'show scene #000000',
  's 经过埃莱娜的床边时，你假装绊了一跤，将血抹在她冰凉的手臂上。',
  's ……',
  's 这天晚上，没有人被带走，空气中浮动着幽幽的烤肉香。',
  's 你们仍然是照常领圣餐，跪在神像前祈祷，再领圣餐，这样不断重复着日程。',
  's 只是多了午夜时分的“二次检测”。',
  's 在持续疼痛的晕眩中，你缓缓陷入睡眠。',
  'jump E2-S12-1',
  //跳转到【12-1】
],

/**
 * ====================================
 *【10-2】S10-2
 * ====================================
 **/
'E2-S10-2':[
  'show scene #000000',
  'i （无论如何，我不想主动受刑。）',
  's 夜已经很深了，你还在辗转反侧着。哦不，只是内心辗转，身体一动不动。',
  'i （这样下去明天早上我就该被带走了吧……）',
  's 你轻轻扭头，只见守夜的修女坐在暗处，头向下顿了顿。',
  'i （看起来像是睡着了？）',
  'i ……',
  //插入选项，起床跳转到【11-1】，否则跳转到【11-2】
  'play sound choices',
    {'Choice':{
        'Dialog': 's 你要怎么做？',
        'no': {
            'Text': '起床跑路',
            'Do': 'jump E2-S11-1',
        },
        'yes': {
            'Text': '躺平摆烂',
            'Do': 'jump E2-S11-2',
        },
    }},
  
],

/**
 * ====================================
 *【11-1】S11-1
 * ====================================
 **/
'E2-S11-1':[
  {'Function':{
    'Apply': function () {
      setTextBoxCSS(textBoxE2);
    },

    'Reverse': function () {
      setTextBoxCSS(textBoxDefault);
    }   
  }},
  'i （不管了，我得起来去找条出路。）',
  'i （等死，找死可乎！）',
  's 为了尽可能地减小自己的暴露范围，你决定在床铺间爬行。',
  'i （诶？这个动作居然还挺解压的……）',
  's 终于爬到了修女身边，她在白色的长袍里均匀地起伏，看来是很累了。',
  'i （毕竟我们跪着的时候她们也得站着，可能消耗的卡路里更多呢。）',
  's 整个白色的大厅里只有三扇门，一扇通向卧室，一扇通向厕所，还有一扇大概是通向蓝厅。',
  'i （还是先去DNA那边找一找，万一被发现了还可以说是人有三急。）',
  's ……',
  'show scene stairs with fadeIn duration 3s',
  's 旋转楼梯一直向上通往高耸的塔楼。',
  'i （上去看看！）',
  'centered',
  'show scene #000000',
  'play sound footsteps',
  'centered',
  'play sound cicada',
  'show scene moon with fadeIn duration 3s',
  'centered',
  's 你终于站到了塔楼的窗前。伸开手臂，月光安静地凝视着你。',
  'i （一百多米高的自由。）',
  's 你小心地探出头去，大口呼吸着深夜的冷冽空气，整个城市在你眼前展开。',
  'i （等等，是我眼花了吗？怎么这里还会长草？）',
  'show scene flower with fadeIn duration 3s',
  's 你忽然发现不远处砖石的缝隙里，一大丛绿色叶片在风中摆动着。',
  'i （诶？这种草好眼熟，我好像还用App识别过……）',
  'i （是茜草！）',
  'i （如果没记错的话，App上说它的根是古代用来染色的……）',
  'play sound click_button',
  's 你伸长胳膊拔了一丛下来，果然，砖红色的根系染红了指尖。',
  'i （这游戏为了让人玩下去可真是无所不用其极啊……）',
  'show scene #000000',
  's 你拿着战利品爬回卧室，悄悄摇醒埃莱娜，在她额头上实验。',
  's 红色的汁液风干后与血痂混在一起，印记呈现出令人满意的色彩。',
  's 这天晚上，你和埃莱娜悄悄叫醒了所有圣女候选人，并为她们“施洗”。',
  's 由于所有人都在担心着额头的印记，没有安稳睡着的，你们没发出什么引人注意的响动。',
  's 昨天“去厕所”的女孩还比划着讲述了二次检测的过程，大家倒吸一口冷气。',
  'i （这也算一种非暴力版歃血为盟了。）',
  's 晨光再次降临的时候，晴天娃娃迟疑地看着你们，但什么也没说。',
  's 你们仍然是照常领圣餐，跪在神像前祈祷，再领圣餐，这样不断重复着日程。',
  's 只是多了午夜时分的“草根施洗”。',
  'jump E2-S12-2',
  //跳转到【12-2】
  
],

/**
 * ====================================
 *【11-2】S11-2
 * ====================================
 **/
'E2-S11-2':[
  {'Function':{
    'Apply': function () {
      setTextBoxCSS(textBoxE2);
    },

    'Reverse': function () {
      setTextBoxCSS(textBoxDefault);
    }   
  }},
  'show scene #000000',
  'i （唉，反正也没用，还是别轻举妄动了。）',
  's ……',
  's 你后来的确是睡着了，但几次在惊厥中醒来，好像多醒几次就可以延缓时间的流逝。',
  'play sound footsteps',
  'show character bpxn normal',
  's 在朦胧的晨光中，晴天娃娃们走了进来，她们望向你额头上的印记，脸上看不见多余的神色。',
  'hide character bpxn',
  's 不出意外，你最终被带走了，没有人知道你去了哪里。',
  'play sound notification',
  'show message Ending-E2taken_away',
  'end'
  //【BE，跳转到开头】
  
],

/**
 * ====================================
 *【12-1】S12-1
 * ====================================
 **/
'E2-S12-1':[
  {'Function':{
    'Apply': function () {
      setTextBoxCSS(textBoxE2);
    },

    'Reverse': function () {
      setTextBoxCSS(textBoxDefault);
    }   
  }},
  's ……',
  'show scene whitehall with fadeIn duration 3s',
  's 如此三天过去。',
  'play sound click_button',
  's 这天祈祷时，你突然闻到一股淡淡的熟悉的味道。',
  's 是硫磺。你又想起整个神殿被淹没的恐怖景象。',
  //插入选项，逃跑跳转至【13-1】，否则跳转至【13-2】
  'play sound choices',
    {'Choice':{
        'Dialog': 's 你要怎么做？',
        'no': {
            'Text': '尝试逃跑',
            'Do': 'jump E2-S13-1',
        },
        'yes': {
            'Text': '逃跑也没有用了',
            'Do': 'jump E2-S13-2',
        },
    }},
],

/**
 * ====================================
 *【13-1】S13-1
 * ====================================
 **/
'E2-S13-1':[
  {'Function':{
    'Apply': function () {
      setTextBoxCSS(textBoxE2);
    },

    'Reverse': function () {
      setTextBoxCSS(textBoxDefault);
    }   
  }},
  'i （不能坐以待毙，得想个办法逃走。）',
  's 你在心里紧张地盘算着，最好的时机就是午夜的“二次检测”。',
  'i （夺过烙铁，打晕修女，拿到钥匙，跑出圣殿，获得自由。）',
  's ……',
  'play sound knock_metal',
  's ……',
  'play sound door_slam',
  's ……',
  's 有些出乎你意料的是，修女们战力为零。计划十分顺利地进行，你毫不费力地冲向门口。',
  // 补充开门声
  'play sound footsteps',
  'centered',
  'show scene bluehall with fadeIn duration 3s',
  'centered',
  'i ……',
  's 推开门，眼前是蓝厅空无一人，深海一样的寂静。',
  's 蓝厅的三面墙上各有一扇门。',
  'i （就沿着这个方向走吧！）',
  'play sound footsteps',
  'centered',
  'show scene redhall with fadeIn duration 3s',
  'centered',
  's 你推开门，面前出现了红厅。',
  's 红厅的三面墙上同样有三扇门。',
  'i （……下一扇门应该就是出口了吧！）',
  'play sound footsteps',
  'centered',
  'show scene bluehall with fadeIn duration 3s',
  'centered',
  's 推开门，你面前出现了蓝厅。',
  'i ……',
  'i （……等等，让我回去换一扇。）',
  'play sound footsteps',
  'centered',
  'play sound door_slam',
  'centered',
  's 锁住了。',
  'i ……',
  'i （……从旁边的门应该可以绕过去吧。）',
  'play sound footsteps',
  'centered',
  'show scene whitehall with fadeIn duration 3s',
  'centered',
  's 推开门，你面前出现了白厅。',
  'i ……',
  'centered',
  'play sound footsteps',
  'centered',
  'play music E3_a_cut_in_love with volume 50',
  'show scene bluehall with fadeIn duration 3s',
  'centered',
  's 推开门，蓝厅。',
  'show scene redhall',
  's 推门，红厅。',
  'show scene bluehall',
  's 门，蓝厅。',
  'show scene whitehall',
  's 白厅。',
  'show scene #000000',
  'centered',
  'play sound click_button',
  'show scene E2_loop1',
  'centered',
  'play sound click_button',
  'show scene E2_loop2',
  'centered',
  'play sound click_button',
  'show scene E2_loop3',
  'centered',
  's 色彩开始在你眼前流动。',
  'play sound click_button',
  'show scene E2_loop4',
  's 陷入循环中，像一个发疯的理发师。',
  'play sound click_button',
  'show scene E2_loop5',
  's 白，蓝，红，蓝，白。',
  'play sound click_button',
  'show scene E2_loop3',
  's 你开始分不清颜色，视网膜收缩成一团。',
  'show scene #000000',
  's 你终于筋疲力尽地瘫坐在地上。',
  's 在天亮前，守卫将你带走，焚烧，像清理一件垃圾。',
  'i （火焰的颜色，也是红，白，蓝。）',
  'play sound notification',
  'show message Ending-E2repeat',
  'end'
  //【BE，跳转到开头】  
  
],

/**
 * ====================================
 *【13-2】S13-2
 * ====================================
 **/
'E2-S13-2':[
  {'Function':{
    'Apply': function () {
      setTextBoxCSS(textBoxE2);
    },

    'Reverse': function () {
      setTextBoxCSS(textBoxDefault);
    }   
  }},
  'i （能做的都做了，也许这就是宿命。）',
  'show scene #000000',
  's 你闭上眼，等待已知命运的降临。',
  'play sound click_button',
  's 空气中逐渐弥漫着“虔诚”的味道。香料氤氲在蒸汽中，淡淡的血腥，羊的膻味，石头缝里渗入的古老霉菌。',
  'play sound door_slam',
  'play sound burning with loop',
  's 突然一声巨响过后，漩涡开始左右摇摆，大理石雕塑变得柔软。',
  'play sound knock_metal',
  's 花窗在接二连三的咔嚓声中碎裂成小块，四处飞舞白色的蝴蝶残翅。',
  's 浓烟涌入大殿，灵魂升上高空。',
  'show scene circle with fadeIn duration 3s',
  's 十具焦黑的尸体双手合十，像常年长在殿中的朽木。她们面前那尊巨大的神像，毫发无损，仍然是伸手下指的姿势。',
  'play sound crowd_whisper with loop fade 2',
  's ……',
  's “但现今，你们既从罪里得了释放，做了神的奴仆，就有成圣的果子，那结局就是永生……”',
  's 只是你发现这声音并不来自别的什么人，是你自己在胸腔里默念经文。',
  'show scene #000000',
  'stop sound crowd_whisper',
  'stop sound burning with fade 3',
  's 求永生，得永生。',
  'centered',
  'centered 死亡人数：10',
  'centered',
  'show image E2_cg2 with fadeIn duration 3s',
  'gallery unlock E2_cg2',
  'centered',
  'play sound notification',
  'show message E2_cgunlock2',
  'play sound notification',
  'show message Ending-E2again',
  'end',
  //画面变暗
  //画面中央显示：【死亡人数：10】  
  
],

/**
 * ====================================
 *【12-2】S12-2
 * ====================================
 **/
'E2-S12-2':[
  {'Function':{
    'Apply': function () {
      setTextBoxCSS(textBoxE2);
    },

    'Reverse': function () {
      setTextBoxCSS(textBoxDefault);
    }   
  }},
  's ……',
  'show scene whitehall with fadeIn duration 3s',
  's 如此三天过去。',
  'play sound click_button',
  's 这天起床时，你突然闻到一股淡淡的熟悉的味道。',
  's 是硫磺。你又想起整个神殿被淹没的恐怖景象。',
  //插入选项，逃跑跳转至【13-3】，否则跳转至【13-2】
  'play sound choices',
    {'Choice':{
        'Dialog': 's 你要怎么做？',
        'no': {
            'Text': '尝试逃跑',
            'Do': 'jump E2-S13-3',
        },
        'yes': {
            'Text': '逃跑也没有用了',
            'Do': 'jump E2-S13-2',
        },
    }},
  
],

/**
 * ====================================
 *【13-3】S13-3
 * ====================================
 **/
'E2-S13-3':[
  {'Function':{
    'Apply': function () {
      setTextBoxCSS(textBoxE2);
    },

    'Reverse': function () {
      setTextBoxCSS(textBoxDefault);
    }   
  }},
  'i （不能坐以待毙，得想个办法逃走。）',
  's 然而你不想把女孩们留下来，变成焦黑的尸体。',
  'show scene whitehall_black with fadeIn duration 3s',
  's 午夜，你打开祈祷的经文，用草茎在上面画出火焰的图案。',
  's 你边画边用手势比划着。很快，她们明白了等待自己的不是教皇，而是一场夺去生命的大火。',
  's 你指了指自己，又指了指通向外面的门。',
  's 正当你想进一步说明这个计划，你自己也迟疑了。如此声势浩大的逃跑，怎么可能不被发现？',
  's 那天第一个“去厕所”的女孩一直安静地观察着你。',
  's 她接过你手中的草茎，在火焰下面画了一个方形，然后指向门外的修女，又指了指自己的额头，做了一个跌倒的动作。',
  'i （难道说……？）',
  's 是的，这是你一直以来隐隐的怀疑——为什么只有修女们的长袍遮得只剩下眼睛？为什么她们即使睡觉也从不换下衣服？为什么她们一直沉默着跟随着你们却不发一言？',
  'i （原来如此。）',
  's 没有通过检测的候选人活下来的机会是成为下一轮的修女，游戏无穷无尽地进行下去。',
  'i （吃人的系统。）',
  'show character bpxn normal',
  's 你扭头，只见守夜的修女坐在暗处，头向下顿了顿。',
  's 你和大家确认了一个眼神，便快步走到修女面前，一把扯下兜帽。',
  'centered',
  'show character bpxn confused',
  'centered',
  's 失去遮蔽的修女惊慌失措，额前赫然显露出一个方形的黑色印记。',
  's 她跌坐在地上，惊慌失措地看着你们，双手合十拼命的祈祷，仿佛你们是克维德神的化身。',
  'i （也对，按照这个所谓的规则，我们的确与圣女无异。）',
  's 你在她颤抖的手背上画了一道门。',
  's 她明白了你的意思，转身走向旋转楼梯的方向，并示意你们跟随。',
  'centered',
  'play sound footsteps',
  'show scene stairs with fadeIn duration 3s',
  'centered',
  's 你们沿着楼梯拾级向下，直到最底层。',
  'play sound knocking_door',
  's 修女敲了敲四周的砖墙，抽出了几块接近地面的石砖，一条极其狭窄且低矮的通道便显露出来。',
  's 女孩们鱼贯而入。',
  's 你守在最后。等女孩们都进入了通道，你扭头看向修女，仿佛用眼神询问她要不要与你们一起出去。',
  's 她先沉默了一会儿，随后苦涩地摇头，指了指自己，在空气中比出一个巨大的零。',
  'i ……',
  'i （也许从进入神殿开始，我们都已经不存在了。）',
  'show scene #00000',
  's ……',
  'centered',
  'play sound bird',
  's 经过漫长的爬行，你们终于见到了那束出口的光。',
  's 东方才开始泛白，你们朝远离火山的方向快步奔跑，直到太阳再次落下，直到火山渐渐消失在天际线。',
  's 转身向神殿望去，却发现再也没有什么神殿。',
  'centered',
  'play music normal_ending',
  'show scene village_fire with fadeIn duration 7s',
  'centered',
  's 在回到村庄前的最后一个山头上，你和“圣女”们一起站在高处，注视着远处浓烟升起。',
  's 你们不知道，大地是否是最后一次流下她的血。',
  'centered',
  'show scene #00000',
  'show image E2_cg3 with fadeIn duration 3s',
  'gallery unlock E2_cg3',
  'centered',
  'play sound notification',
  'show message E2_cgunlock3',
  'play sound notification',
  'show message Ending-E2HE',
  'end'
  //【HE，通关，回到封控红码线】

],

})