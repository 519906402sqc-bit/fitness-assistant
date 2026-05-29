const exercises = {
  warmup: {
    name: "体态热身组合",
    category: "热身",
    dose: "6-8分钟：快走3分钟 + 弹力带拉开2×15 + 轻面拉2×15 + 臀桥2×12",
    cues: ["肩远离耳朵", "肋骨收住", "先轻后重"],
    steps: [
      "先用快走让身体热起来，不需要累。",
      "弹力带拉开和轻面拉只为唤醒后束、下斜方和肩袖。",
      "臀桥让骨盆和臀部进入状态，减少腰代偿。"
    ],
    mistakes: ["热身做到力竭", "一上来就冲大重量", "肩膀越练越耸"],
    video: "https://www.youtube.com/results?search_query=band+pull+apart+face+pull+glute+bridge+warm+up",
    guide: "https://www.nasm.org/exercise-library"
  },
  inclineMachinePress: {
    name: "上斜器械推胸",
    category: "胸/上胸",
    dose: "4组 × 8-12次（Day1）或 3组 × 8-12次（Day4）",
    cues: ["主菜动作", "轨迹到上胸", "胸主动"],
    steps: [
      "座椅调到手柄大约对准上胸，脚踩稳。",
      "肩胛轻轻后下放，推起时想象用锁骨下方的胸把手柄推出去。",
      "下放到胸有拉伸即可，不要为了更低而让肩前侧顶痛。"
    ],
    mistakes: ["座椅太低导致肩前顶", "耸肩推", "每组都冲到动作变形"],
    video: "https://www.youtube.com/results?search_query=incline+machine+chest+press+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  inclineDbPress: {
    name: "上斜哑铃卧推",
    category: "胸/稳定",
    dose: "3组 × 8-10次，稳定优先，不追重量",
    cues: ["轻一点", "轨迹稳", "不晃"],
    steps: [
      "凳子20-30度，先用你能稳定启动的重量。",
      "哑铃从上胸两侧下降，手腕叠在肘上方。",
      "推起时保持路线稳定，目的不是冲重量，而是练肩胛、手腕和小臂控制。"
    ],
    mistakes: ["重量过大启动困难", "手腕后折", "哑铃路径乱晃"],
    video: "https://www.youtube.com/results?search_query=incline+dumbbell+press+proper+form",
    guide: "https://gravitus.com/guides/exercises/incline-dumbbell-press/"
  },
  flatMachinePress: {
    name: "平板器械推胸",
    category: "胸/厚度",
    dose: "3-4组 × 8-12次",
    cues: ["厚度主菜", "稳定发力", "不看杠铃KPI"],
    steps: [
      "座椅调到手柄对准中胸，肩胛稳定。",
      "用胸把手柄推远，顶部不要耸肩锁死。",
      "下放时控制速度，让胸被拉开，而不是让肩前侧被顶住。"
    ],
    mistakes: ["手柄太高或太低", "肩膀前伸代偿", "为了加重量牺牲幅度"],
    video: "https://www.youtube.com/results?search_query=machine+chest+press+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  lowCableFly: {
    name: "低位绳索夹胸",
    category: "胸/上胸",
    dose: "3组 × 12-15次",
    cues: ["从下往上", "顶峰停1秒", "小重量"],
    steps: [
      "滑轮放低，身体略前倾，肘保持微弯。",
      "从身体两侧下方往上胸方向合拢。",
      "顶部停1秒，感受上胸收缩，再慢慢放回。"
    ],
    mistakes: ["变成弯举", "肩膀向前顶", "重量太大导致身体晃"],
    video: "https://www.youtube.com/results?search_query=low+to+high+cable+fly+proper+form",
    guide: "https://www.muscleandstrength.com/exercises/low-cable-crossover.html"
  },
  dbLateralRaise: {
    name: "哑铃侧平举",
    category: "肩/中束",
    dose: "4组 × 12-20次",
    cues: ["手肘带动", "不耸肩", "动作干净"],
    steps: [
      "身体站稳，手肘微弯，肩膀远离耳朵。",
      "手肘带着手臂向两侧抬到肩高附近。",
      "慢慢下放，重量宁可轻，也不要甩和耸肩。"
    ],
    mistakes: ["斜方肌先酸", "身体甩动", "手腕高过手肘太多"],
    video: "https://www.youtube.com/results?search_query=dumbbell+lateral+raise+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  cableLateralRaise: {
    name: "绳索侧平举",
    category: "肩/中束",
    dose: "3组 × 12-20次",
    cues: ["持续张力", "别耸肩", "侧束酸"],
    steps: [
      "滑轮放低，身体微微远离器械，让底部也有张力。",
      "手肘带手腕向侧上方抬到肩高附近。",
      "底部不要完全松掉，保持侧束有张力。"
    ],
    mistakes: ["耸肩", "甩身体", "重量太大导致轨迹变形"],
    video: "https://www.youtube.com/results?search_query=cable+lateral+raise+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  tricepsPushdown: {
    name: "绳索下压",
    category: "手臂/三头",
    dose: "3组 × 10-15次",
    cues: ["肘固定", "底部挤压", "肩放松"],
    steps: [
      "肘贴近身体两侧，不要跟着重量前后跑。",
      "向下压到手臂接近伸直，底部停一下。",
      "回程控制，不要让重量把手臂拽飞。"
    ],
    mistakes: ["身体下砸借力", "肘向外飞", "肩膀耸起"],
    video: "https://www.youtube.com/results?search_query=cable+triceps+pushdown+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  pullUp: {
    name: "标准引体向上",
    category: "背/背阔",
    dose: "累计30个，分多组完成，每组保留1次余力",
    cues: ["总次数法", "先沉肩", "肘向下"],
    steps: [
      "每组不要做到彻底力竭，第一组通常留1次余力。",
      "从底部开始，但肩不要完全松垮。",
      "当天状态好就少组完成，状态一般就多组凑够30个。"
    ],
    mistakes: ["第一组冲废", "为了凑次数牺牲全程", "下巴硬凑"],
    video: "https://www.youtube.com/results?search_query=pull+up+proper+form",
    guide: "https://blog.nasm.org/how-to-get-better-at-pull-ups"
  },
  latPulldown: {
    name: "高位下拉",
    category: "背/背阔",
    dose: "4组 × 8-12次",
    cues: ["先沉肩", "拉肘", "小臂别抢"],
    steps: [
      "坐稳后先让肩远离耳朵。",
      "用肘向下拉，不要想着用手把杆拽下来。",
      "拉到上胸附近，回程让背阔被拉长但不耸肩。"
    ],
    mistakes: ["后仰太多", "手臂先酸背没感觉", "拉到脖子后面"],
    video: "https://www.youtube.com/results?search_query=lat+pulldown+proper+form",
    guide: "https://blog.nasm.org/biomechanics-of-the-lat-pulldown"
  },
  chestSupportedRow: {
    name: "胸托划船",
    category: "背/划船",
    dose: "3-4组 × 8-12次",
    cues: ["胸贴垫", "不甩腰", "肘向后"],
    steps: [
      "胸口贴住垫子，脚踩稳。",
      "先微收肩胛，再把肘拉向身体侧后方。",
      "顶部停半秒，慢慢放回到背被拉长。"
    ],
    mistakes: ["胸离垫借力", "下背代偿", "只用手臂弯"],
    video: "https://www.youtube.com/results?search_query=chest+supported+row+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  seatedRow: {
    name: "坐姿划船",
    category: "背/划船",
    dose: "3组 × 10-12次",
    cues: ["胸不塌", "肘后拉", "控制回程"],
    steps: [
      "坐高，肋骨收住，不要靠后仰拉重量。",
      "肘向后拉，顶峰轻轻夹住背。",
      "回程控制，让肩胛前伸一点，保持张力。"
    ],
    mistakes: ["身体后仰太多", "手臂先累", "耸肩"],
    video: "https://www.youtube.com/results?search_query=seated+cable+row+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  straightArmPulldown: {
    name: "直臂下压",
    category: "背/背阔",
    dose: "3组 × 12-15次",
    cues: ["腋下发力", "不后仰", "手臂微弯"],
    steps: [
      "滑轮调高，手臂保持微弯。",
      "从肩屈位置把杆或绳拉到大腿前。",
      "想象用腋下夹住重量，而不是用手臂压。"
    ],
    mistakes: ["肘弯成下拉", "腰往后仰", "肩前顶"],
    video: "https://www.youtube.com/results?search_query=straight+arm+pulldown+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  rearDeltFly: {
    name: "反向飞鸟 / 后束飞鸟",
    category: "肩/后束",
    dose: "3-4组 × 15-20次",
    cues: ["轻重量", "打开", "不耸肩"],
    steps: [
      "胸贴垫或身体站稳，手肘微弯。",
      "向两侧打开到肩后侧收缩。",
      "回程慢，不要让重量把肩拉塌。"
    ],
    mistakes: ["斜方肌代偿", "甩重量", "夹肩胛过度"],
    video: "https://www.youtube.com/results?search_query=rear+delt+fly+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  facePull: {
    name: "面拉",
    category: "肩/体态",
    dose: "3组 × 15-20次",
    cues: ["拉到眼眉", "外旋", "不耸肩"],
    steps: [
      "绳索在脸或略高的位置，身体后退让绳索有张力。",
      "拉向眼眉高度，同时把绳子向两边分开。",
      "终点像做一个轻微的双臂展示姿势，肩膀仍远离耳朵。"
    ],
    mistakes: ["拉到胸口", "耸肩", "重量大到身体后倒"],
    video: "https://www.nasm.org/resource-center/exercise-library/face-pull",
    guide: "https://www.nasm.org/resource-center/exercise-library/face-pull"
  },
  curl: {
    name: "哑铃弯举",
    category: "手臂/二头",
    dose: "3组 × 10-12次（Day2）或 2组 × 10-15次（Day4）",
    cues: ["肘不跑", "慢下放", "别甩"],
    steps: [
      "身体站稳，肘在身体两侧。",
      "弯举到二头收缩，顶部不把肘往前抬太多。",
      "下放2秒，保持控制。"
    ],
    mistakes: ["借腰甩", "肩膀前顶", "只做半程"],
    video: "https://www.youtube.com/results?search_query=dumbbell+curl+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  legPress: {
    name: "腿举",
    category: "腿/功能",
    dose: "3组 × 10-12次，保留2-3次余力",
    cues: ["膝盖对脚尖", "不锁死", "不酸爆"],
    steps: [
      "脚放在踏板中部略高，膝盖方向跟脚尖一致。",
      "下放到骨盆不卷起的位置即可。",
      "推起时不要完全锁死膝盖。"
    ],
    mistakes: ["下放太深导致腰圆", "膝盖内扣", "练到影响跳舞"],
    video: "https://www.youtube.com/results?search_query=leg+press+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  gluteBridge: {
    name: "臀桥 / 臀推",
    category: "腿/臀",
    dose: "3组 × 10-12次",
    cues: ["臀发力", "别顶腰", "肋骨收"],
    steps: [
      "脚跟踩稳，动作前先轻收肋骨。",
      "用臀部把髋伸起来，顶部臀部收紧。",
      "下降时保持躯干控制。"
    ],
    mistakes: ["腰椎代偿", "脚离身体太远", "顶部肋骨外翻"],
    video: "https://www.youtube.com/results?search_query=glute+bridge+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  legCurl: {
    name: "坐姿腿弯举",
    category: "腿/后侧链",
    dose: "3组 × 10-15次",
    cues: ["控制", "后侧发力", "不弹"],
    steps: [
      "膝关节对准器械轴心，垫子固定大腿。",
      "向下弯曲到腘绳肌收缩。",
      "回程慢，别让重量砸回去。"
    ],
    mistakes: ["座椅没调好", "借惯性弹", "腰跟着动"],
    video: "https://www.youtube.com/results?search_query=seated+leg+curl+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  calfRaise: {
    name: "提踵",
    category: "腿/小腿",
    dose: "4组 × 12-20次",
    cues: ["顶峰停", "全脚掌稳", "慢下放"],
    steps: [
      "脚掌踩稳，脚跟下降到小腿有拉伸。",
      "向上提到最高点停半秒。",
      "慢慢回到底部，保持脚踝不乱晃。"
    ],
    mistakes: ["只做小幅弹动", "脚踝内外翻", "速度太快"],
    video: "https://www.youtube.com/results?search_query=standing+calf+raise+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  birdDog: {
    name: "Bird Dog 鸟狗式",
    category: "核心/体态",
    dose: "3组 × 6-8次/边，每次顶峰停3-5秒",
    cues: ["骨盆不转", "慢", "背平"],
    steps: [
      "四点跪姿，手在肩下，膝在髋下。",
      "先收住肋骨和骨盆，再同时伸出对侧手和腿。",
      "顶峰保持身体不旋转，慢慢回到起点再换边。"
    ],
    mistakes: ["腰塌", "腿抬太高导致骨盆翻", "速度太快"],
    video: "https://www.youtube.com/results?search_query=bird+dog+exercise+proper+form",
    guide: "https://www.spine-health.com/wellness/exercise/mcgill-big-3-exercises"
  },
  mcGillCurlUp: {
    name: "McGill Curl Up",
    category: "核心/体态",
    dose: "2组 × 6-8次/边，每次顶峰停8-10秒",
    cues: ["脖子放松", "腰椎中立", "短幅度"],
    steps: [
      "仰卧，一腿伸直，一腿屈膝，双手垫在下背维持自然弧度。",
      "先轻轻吐气收紧腹部，再把头和肩胛微微抬离地面。",
      "保持8-10秒后放下，换边重复。动作幅度很小，不是传统卷腹。"
    ],
    mistakes: ["用脖子硬抬", "把腰压平或拱太高", "做成快速卷腹"],
    video: "https://www.youtube.com/results?search_query=McGill+curl+up+proper+form",
    guide: "https://www.spine-health.com/wellness/exercise/mcgill-big-3-exercises"
  },
  plank: {
    name: "平板支撑",
    category: "核心/体态",
    dose: "2组 × 30-50秒",
    cues: ["肋骨收", "臀轻夹", "不塌腰"],
    steps: [
      "肘在肩下，脚尖踩地，身体从头到脚成一直线。",
      "吐气后把肋骨向下收，臀部轻轻夹住。",
      "保持呼吸，不追求超长时间。"
    ],
    mistakes: ["腰塌", "屁股翘太高", "憋气"],
    video: "https://www.youtube.com/results?search_query=plank+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  crunchMachine: {
    name: "卷腹凳 / 腹肌卷腹机",
    category: "核心/腹肌视觉",
    dose: "2-3组 × 10-15次（Day1）或 3组 × 10-15次（Day3）",
    cues: ["肋骨卷向骨盆", "慢卷慢放", "顶峰停1秒"],
    steps: [
      "先吐气，让肋骨向骨盆方向卷，而不是用脖子硬拉。",
      "顶部停1秒，感受上腹收缩。",
      "慢慢放回，保持腹部张力，不要砸回起点。"
    ],
    mistakes: ["用髋屈肌发力", "脖子先酸", "动作太快没有腹肌收缩"],
    video: "https://www.youtube.com/results?search_query=ab+crunch+machine+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  },
  recoveryDay1: {
    name: "Day1 训练后恢复",
    category: "恢复/拉伸",
    dose: "10分钟：胸前筋膜球2分钟/边 + 门框胸拉伸45秒×2 + 背阔拉伸45秒×2 + 靠墙天使2×10",
    cues: ["放松胸前", "打开肩胛", "不压痛"],
    steps: [
      "胸前筋膜球轻压胸小肌区域，酸胀可以，刺痛不需要硬顶。",
      "门框胸拉伸时肩膀下沉，避免耸肩顶肩前侧。",
      "背阔拉伸和靠墙天使用来恢复上肢打开感。"
    ],
    mistakes: ["越拉越耸肩", "压到尖锐疼痛", "靠墙天使腰明显反弓"],
    video: "https://www.youtube.com/results?search_query=doorway+pec+stretch+wall+angel+lat+stretch",
    guide: "https://www.nasm.org/exercise-library"
  },
  recoveryDay2: {
    name: "Day2 训练后恢复",
    category: "恢复/拉伸",
    dose: "10分钟：后肩筋膜球1-2分钟/边 + 儿童式侧伸45秒/边 + 胸椎旋转10次/边 + 前臂拉伸30秒×2",
    cues: ["后肩放松", "胸椎旋转", "前臂舒缓"],
    steps: [
      "后肩筋膜球轻压后束和肩胛外侧区域。",
      "儿童式侧伸重点拉背阔，保持呼吸。",
      "胸椎旋转慢做，前臂拉伸用于缓解下拉、划船时的小臂紧张。"
    ],
    mistakes: ["用腰硬拧胸椎旋转", "拉伸憋气", "压迫神经样麻痛还继续压"],
    video: "https://www.youtube.com/results?search_query=child+pose+lat+stretch+thoracic+rotation+forearm+stretch",
    guide: "https://www.nasm.org/exercise-library"
  },
  recoveryDay3: {
    name: "Day3 训练后恢复",
    category: "恢复/拉伸",
    dose: "12分钟：臀部筋膜球2分钟/边 + 髋屈肌拉伸45秒×2/边 + 90/90髋转换10次/边 + 猫牛10次 + 小腿拉伸45秒×2",
    cues: ["髋打开", "小腿放松", "不影响跳舞"],
    steps: [
      "臀部筋膜球以舒服酸胀为准。",
      "髋屈肌拉伸时收住肋骨和骨盆，别用腰顶。",
      "90/90和猫牛让髋、脊柱恢复活动度，小腿拉伸保留弹性。"
    ],
    mistakes: ["髋屈肌拉伸时腰反弓", "90/90速度太快", "拉到尖锐疼痛"],
    video: "https://www.youtube.com/results?search_query=hip+flexor+stretch+90+90+hip+switch+cat+cow+calf+stretch",
    guide: "https://www.nasm.org/exercise-library"
  },
  recoveryDay4: {
    name: "Day4 训练后恢复",
    category: "恢复/拉伸",
    dose: "8-10分钟：胸前筋膜球1分钟/边 + 门框胸拉伸45秒×2 + 儿童式45秒 + 靠墙天使2×10",
    cues: ["胸打开", "背阔放松", "肩胛找回位置"],
    steps: [
      "胸前筋膜球和门框拉伸缓解推胸后的胸前紧张。",
      "儿童式让背阔和胸椎放松。",
      "靠墙天使作为收尾，让肩胛回到更好的位置。"
    ],
    mistakes: ["拉伸太猛", "靠墙天使耸肩", "腰反弓代偿"],
    video: "https://www.youtube.com/results?search_query=pec+minor+release+doorway+stretch+child+pose+wall+angel",
    guide: "https://www.nasm.org/exercise-library"
  },
  homeMobility: {
    name: "周末灵活性组合",
    category: "周末/跳舞",
    dose: "2-3轮：猫牛10 + 90/90髋转换10/边 + 髋屈肌拉伸45秒/边 + 靠墙天使12",
    cues: ["舒服", "慢", "不练废"],
    steps: [
      "把它当作跳舞辅助，不当正式力量训练。",
      "每个动作追求可控的活动范围。",
      "做完应该更轻松，而不是更疲劳。"
    ],
    mistakes: ["拉伸憋气", "强行压痛", "周末又练到酸痛"],
    video: "https://www.youtube.com/results?search_query=90+90+hip+switch+wall+angel+proper+form",
    guide: "https://www.nasm.org/exercise-library"
  }
};

const workouts = [
  {
    id: "day1",
    name: "Day1 上胸 + 肩中束 + 腹肌",
    note: "上胸主导，肩中束高收益。器械先把胸练到位，哑铃只做稳定训练，最后补腹肌视觉。",
    items: ["warmup", "inclineMachinePress", "inclineDbPress", "lowCableFly", "dbLateralRaise", "cableLateralRaise", "tricepsPushdown", "mcGillCurlUp", "crunchMachine", "recoveryDay1"]
  },
  {
    id: "day2",
    name: "Day2 背阔 + 后束",
    note: "背阔、后束和肩胛控制优先。引体用累计30个，不固定8/6/5/4。",
    items: ["warmup", "pullUp", "latPulldown", "chestSupportedRow", "straightArmPulldown", "rearDeltFly", "facePull", "curl", "recoveryDay2"]
  },
  {
    id: "day3",
    name: "Day3 功能腿 + 核心",
    note: "兼容 hiphop，全部保留2-3次余力。前三周不做保加利亚分腿蹲。",
    items: ["warmup", "legPress", "gluteBridge", "legCurl", "calfRaise", "birdDog", "mcGillCurlUp", "plank", "crunchMachine", "recoveryDay3"]
  },
  {
    id: "day4",
    name: "Day4 胸厚度 + 背阔强化",
    note: "平板器械补胸整体厚度，杠铃卧推降级为4周一次测试。",
    items: ["warmup", "flatMachinePress", "inclineMachinePress", "latPulldown", "seatedRow", "cableLateralRaise", "rearDeltFly", "curl", "tricepsPushdown", "recoveryDay4"]
  },
  {
    id: "weekend",
    name: "周末 家里辅助",
    note: "灵活性、核心、舞蹈辅助。不练废。",
    items: ["homeMobility", "birdDog", "mcGillCurlUp", "gluteBridge"]
  }
];

const kpiItems = [
  { label: "上斜器械推胸", exerciseId: "inclineMachinePress" },
  { label: "平板器械推胸", exerciseId: "flatMachinePress" },
  { label: "引体总次数", exerciseId: "pullUp", type: "reps" },
  { label: "胸托划船", exerciseId: "chestSupportedRow" },
  { label: "侧平举", exerciseIds: ["dbLateralRaise", "cableLateralRaise"] }
];

const nonLogItems = new Set([
  "warmup",
  "homeMobility",
  "recoveryDay1",
  "recoveryDay2",
  "recoveryDay3",
  "recoveryDay4"
]);

const progressKey = "lean-muscle-training-progress-v2";
const logKey = "lean-muscle-training-logs-v2";
const progress = JSON.parse(localStorage.getItem(progressKey) || "{}");
const trainingLogs = JSON.parse(localStorage.getItem(logKey) || "{}");
let selectedCategory = "全部";

function saveProgress() {
  localStorage.setItem(progressKey, JSON.stringify(progress));
}

function saveLogs() {
  localStorage.setItem(logKey, JSON.stringify(trainingLogs));
}

function getDateKey(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toISOString().slice(0, 10);
}

function parseNumber(value) {
  const number = Number(String(value).replace(/[^\d.]/g, ""));
  return Number.isFinite(number) ? number : 0;
}

function getExerciseSets(dateKey, workoutId, exerciseId) {
  trainingLogs[dateKey] ||= {};
  trainingLogs[dateKey][workoutId] ||= {};
  trainingLogs[dateKey][workoutId][exerciseId] ||= Array.from({ length: 4 }, () => ({
    weight: "",
    reps: "",
    rest: ""
  }));
  return trainingLogs[dateKey][workoutId][exerciseId];
}

function collectExerciseEntries(exerciseIds) {
  const ids = Array.isArray(exerciseIds) ? exerciseIds : [exerciseIds];
  const entries = [];
  Object.entries(trainingLogs).forEach(([dateKey, dayLog]) => {
    Object.entries(dayLog).forEach(([workoutId, workoutLog]) => {
      ids.forEach((exerciseId) => {
        (workoutLog[exerciseId] || []).forEach((set) => {
          const reps = parseNumber(set.reps);
          if (!reps) return;
          entries.push({
            dateKey,
            workoutId,
            exerciseId,
            weight: parseNumber(set.weight),
            reps,
            rest: parseNumber(set.rest)
          });
        });
      });
    });
  });
  return entries.sort((a, b) => a.dateKey.localeCompare(b.dateKey));
}

function summarizeEntries(entries, type = "volume") {
  if (!entries.length) return "未记录";
  const latestDate = entries[entries.length - 1].dateKey;
  const latest = entries.filter((entry) => entry.dateKey === latestDate);
  if (type === "reps") {
    const reps = latest.reduce((sum, entry) => sum + entry.reps, 0);
    return `${reps}次`;
  }
  const best = latest.reduce((winner, entry) => {
    if (!winner) return entry;
    const score = entry.weight * entry.reps;
    const winnerScore = winner.weight * winner.reps;
    return score > winnerScore ? entry : winner;
  }, null);
  if (!best || !best.reps) return "未记录";
  return best.weight ? `${best.weight}kg × ${best.reps}` : `自重 × ${best.reps}`;
}

function renderKpis() {
  const grid = document.querySelector("#kpiGrid");
  grid.innerHTML = "";
  kpiItems.forEach((item) => {
    const entries = collectExerciseEntries(item.exerciseIds || item.exerciseId);
    const current = summarizeEntries(entries, item.type);
    const dates = [...new Set(entries.map((entry) => entry.dateKey))];
    const previousDate = dates.length > 1 ? dates[dates.length - 2] : "";
    const previousEntries = previousDate ? entries.filter((entry) => entry.dateKey === previousDate) : [];
    const previous = previousEntries.length ? summarizeEntries(previousEntries, item.type) : "无";
    const card = document.createElement("article");
    card.className = "kpi-card";
    card.innerHTML = `<h3>${item.label}</h3><p><span>当前</span>${current}</p><p><span>上次</span>${previous}</p>`;
    grid.appendChild(card);
  });
}

function createExerciseCard(id, workoutId = "library") {
  const exercise = exercises[id];
  const template = document.querySelector("#exerciseCardTemplate");
  const node = template.content.firstElementChild.cloneNode(true);
  const doneKey = `${workoutId}:${id}`;

  node.querySelector(".tag").textContent = exercise.category;
  node.querySelector("h3").textContent = exercise.name;
  node.querySelector(".dose").textContent = exercise.dose;

  const cueRow = node.querySelector(".cue-row");
  exercise.cues.forEach((cue) => {
    const span = document.createElement("span");
    span.className = "cue";
    span.textContent = cue;
    cueRow.appendChild(span);
  });

  node.querySelector(".details-body").innerHTML = `
    <strong>标准步骤</strong>
    <ul>${exercise.steps.map((step) => `<li>${step}</li>`).join("")}</ul>
    <strong>常见错误</strong>
    <ul>${exercise.mistakes.map((mistake) => `<li>${mistake}</li>`).join("")}</ul>
  `;

  node.querySelector(".links").innerHTML = `
    <a href="${exercise.video}" target="_blank" rel="noreferrer">看视频</a>
    <a class="secondary" href="${exercise.guide}" target="_blank" rel="noreferrer">图解/说明</a>
  `;

  const doneButton = node.querySelector(".done-button");
  if (progress[doneKey]) {
    doneButton.classList.add("is-done");
    doneButton.textContent = "已完成";
  }
  doneButton.addEventListener("click", () => {
    progress[doneKey] = !progress[doneKey];
    doneButton.classList.toggle("is-done", progress[doneKey]);
    doneButton.textContent = progress[doneKey] ? "已完成" : "完成";
    saveProgress();
  });

  return node;
}

function renderToday(workoutId = workouts[0].id) {
  const workout = workouts.find((item) => item.id === workoutId) || workouts[0];
  const container = document.querySelector("#todayWorkout");
  container.innerHTML = "";

  const intro = document.createElement("article");
  intro.className = "day-card";
  intro.innerHTML = `<h3>${workout.name}</h3><p>${workout.note}</p>`;
  container.appendChild(intro);

  workout.items.forEach((id) => container.appendChild(createExerciseCard(id, workout.id)));
}

function selectWorkout(workoutId) {
  document.querySelector("#dayPicker").value = workoutId;
  document.querySelector("#logWorkoutPicker").value = workoutId;
  renderToday(workoutId);
  renderLogEditor(workoutId);
}

function renderPlan() {
  const container = document.querySelector("#weeklyPlan");
  container.innerHTML = "";
  workouts.forEach((workout) => {
    const card = document.createElement("article");
    card.className = "day-card";
    card.innerHTML = `
      <h3>${workout.name}</h3>
      <p>${workout.note}</p>
      <ul class="plain-list">${workout.items.map((id) => `<li>${exercises[id].name}：${exercises[id].dose}</li>`).join("")}</ul>
    `;
    container.appendChild(card);
  });
}

function renderFilters() {
  const categories = ["全部", ...new Set(Object.values(exercises).map((exercise) => exercise.category.split("/")[0]))];
  const filters = document.querySelector("#filters");
  filters.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = `filter ${category === selectedCategory ? "is-active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      selectedCategory = category;
      renderFilters();
      renderLibrary();
    });
    filters.appendChild(button);
  });
}

function renderLibrary() {
  const query = document.querySelector("#searchBox").value.trim().toLowerCase();
  const container = document.querySelector("#exerciseLibrary");
  container.innerHTML = "";

  Object.entries(exercises)
    .filter(([, exercise]) => selectedCategory === "全部" || exercise.category.startsWith(selectedCategory))
    .filter(([id, exercise]) => {
      const text = `${id} ${exercise.name} ${exercise.category} ${exercise.cues.join(" ")}`.toLowerCase();
      return !query || text.includes(query);
    })
    .forEach(([id]) => container.appendChild(createExerciseCard(id)));
}

function renderLogEditor(workoutId = workouts[0].id) {
  const workout = workouts.find((item) => item.id === workoutId) || workouts[0];
  const container = document.querySelector("#logEditor");
  const dateKey = getDateKey();
  container.innerHTML = "";

  workout.items
    .filter((id) => !nonLogItems.has(id))
    .forEach((exerciseId) => {
      const exercise = exercises[exerciseId];
      const sets = getExerciseSets(dateKey, workout.id, exerciseId);
      const card = document.createElement("article");
      card.className = "log-card";
      card.innerHTML = `
        <div class="card-head">
          <div>
            <p class="tag">${exercise.category}</p>
            <h3>${exercise.name}</h3>
            <p class="dose">${exercise.dose}</p>
          </div>
          <button class="small-button" type="button" data-add-set="${exerciseId}">加一组</button>
        </div>
        <div class="set-grid">
          <span>组</span><span>重量kg</span><span>次数</span><span>休息秒</span>
        </div>
        <div class="sets"></div>
      `;

      const setsNode = card.querySelector(".sets");
      sets.forEach((set, index) => {
        const row = document.createElement("div");
        row.className = "set-grid";
        row.innerHTML = `
          <span>${index + 1}</span>
          <input inputmode="decimal" aria-label="${exercise.name} 第${index + 1}组重量" value="${set.weight}" data-log="${exerciseId}:${index}:weight" />
          <input inputmode="numeric" aria-label="${exercise.name} 第${index + 1}组次数" value="${set.reps}" data-log="${exerciseId}:${index}:reps" />
          <input inputmode="numeric" aria-label="${exercise.name} 第${index + 1}组休息" value="${set.rest}" data-log="${exerciseId}:${index}:rest" />
        `;
        setsNode.appendChild(row);
      });

      card.querySelectorAll("[data-log]").forEach((input) => {
        input.addEventListener("input", (event) => {
          const [id, index, field] = event.target.dataset.log.split(":");
          getExerciseSets(dateKey, workout.id, id)[Number(index)][field] = event.target.value;
          saveLogs();
          renderKpis();
        });
      });

      card.querySelector("[data-add-set]").addEventListener("click", () => {
        sets.push({ weight: "", reps: "", rest: "" });
        saveLogs();
        renderLogEditor(workout.id);
      });

      container.appendChild(card);
    });
}

function analyzeTraining() {
  const articles = [];
  const loggedKpis = kpiItems.map((item) => {
    const entries = collectExerciseEntries(item.exerciseIds || item.exerciseId);
    return { ...item, entries, current: summarizeEntries(entries, item.type) };
  });

  if (loggedKpis.every((item) => item.current === "未记录")) {
    articles.push("还没有训练记录。先记录五个关键指标：上斜器械推胸、平板器械推胸、引体总次数、胸托划船、侧平举。");
  } else {
    articles.push("这4周只看五个关键指标。动作稳定时再加重量，动作变形时先不加。");
    loggedKpis.forEach((item) => {
      let suggestion = "继续记录，等有两次以上数据后再判断趋势。";
      const latest = item.entries[item.entries.length - 1];
      if (latest && item.type === "reps") {
        suggestion = latest.reps >= 30 ? "如果30个完成质量稳定，下次尝试用更少组完成。" : "继续累计到30个，不要第一组力竭。";
      } else if (latest && latest.weight && latest.reps >= 12) {
        suggestion = "下次可以小幅加重量，器械加2.5-5kg，哑铃每边加1kg左右。";
      } else if (latest && latest.reps && latest.reps <= 6) {
        suggestion = "下次先降一点重量，把有效次数拉回8-12次。";
      }
      articles.push(`${item.label}：当前 ${item.current}。${suggestion}`);
    });
  }

  const box = document.querySelector("#analysisBox");
  box.innerHTML = articles.map((text) => `<article>${text}</article>`).join("");
  renderKpis();
  return articles.join("\n");
}

function addChatMessage(role, text) {
  const log = document.querySelector("#chatLog");
  const node = document.createElement("div");
  node.className = `message ${role}`;
  node.innerHTML = text.replace(/\n/g, "<br>");
  log.appendChild(node);
  log.scrollTop = log.scrollHeight;
}

function findWorkoutFromText(text) {
  const map = { "1": "day1", "一": "day1", "2": "day2", "二": "day2", "3": "day3", "三": "day3", "4": "day4", "四": "day4", "5": "weekend", "五": "weekend" };
  const match = text.match(/训练日\s*([1-5一二三四五])/);
  if (match) return map[match[1]];
  if (text.includes("背")) return "day2";
  if (text.includes("腿")) return "day3";
  if (text.includes("厚度")) return "day4";
  if (text.includes("胸") || text.includes("肩")) return "day1";
  if (text.includes("周末") || text.includes("家里")) return "weekend";
  return null;
}

function findExerciseFromText(text) {
  return Object.entries(exercises).find(([, exercise]) => text.includes(exercise.name.split(" ")[0]));
}

function replyToCoach(text) {
  const workoutId = findWorkoutFromText(text);
  const exerciseMatch = findExerciseFromText(text);

  if (text.includes("分析") || text.includes("建议") || text.includes("调整")) {
    return analyzeTraining();
  }

  if (exerciseMatch && (text.includes("怎么做") || text.includes("教学") || text.includes("标准") || text.includes("讲"))) {
    const [, exercise] = exerciseMatch;
    return `${exercise.name}\n剂量：${exercise.dose}\n关键口令：${exercise.cues.join(" / ")}\n步骤：${exercise.steps.join(" ")}\n常见错误：${exercise.mistakes.join("；")}\n动作库里可以点“看视频”和“图解/说明”。`;
  }

  if (workoutId) {
    const workout = workouts.find((item) => item.id === workoutId);
    selectWorkout(workout.id);
    const list = workout.items.map((id, index) => `${index + 1}. ${exercises[id].name}：${exercises[id].dose}`).join("\n");
    return `已切到 ${workout.name}。\n${workout.note}\n\n${list}\n\n练完去“记录”页填重量、次数、休息；首页只追踪五个关键指标。`;
  }

  return "你可以输入：训练日1、训练日2、面拉怎么做、分析。未来4周不再大改计划，只记录和执行。";
}

function initPickers() {
  const dayPicker = document.querySelector("#dayPicker");
  const logPicker = document.querySelector("#logWorkoutPicker");
  workouts.forEach((workout) => {
    const option = document.createElement("option");
    option.value = workout.id;
    option.textContent = workout.name;
    dayPicker.appendChild(option);
    logPicker.appendChild(option.cloneNode(true));
  });
  dayPicker.addEventListener("change", (event) => selectWorkout(event.target.value));
  logPicker.addEventListener("change", (event) => selectWorkout(event.target.value));
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
    document.querySelectorAll(".view").forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.querySelector(`#${tab.dataset.view}`).classList.add("is-active");
  });
});

document.querySelector("#searchBox").addEventListener("input", renderLibrary);
document.querySelector("#analyzeButton").addEventListener("click", analyzeTraining);
document.querySelector("#coachForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#coachInput");
  const text = input.value.trim();
  if (!text) return;
  addChatMessage("user", text);
  addChatMessage("coach", replyToCoach(text));
  input.value = "";
});
document.querySelector("#resetProgress").addEventListener("click", () => {
  Object.keys(progress).forEach((key) => delete progress[key]);
  saveProgress();
  renderToday(document.querySelector("#dayPicker").value);
  renderLibrary();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}

initPickers();
renderToday();
renderPlan();
renderFilters();
renderLibrary();
renderLogEditor();
renderKpis();
analyzeTraining();
addChatMessage("coach", "v2.0 已同步：训练日1-4包含正式训练、腹肌视觉层和训练后恢复。你可以输入“训练日1-4”查看当天内容，或输入“分析”查看五个关键指标。");
