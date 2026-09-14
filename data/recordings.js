// =============================================================================
//  RadarAD  -  recording table
//  이 파일만 고치면 페이지 전체가 따라 바뀝니다. HTML 은 건드릴 필요 없습니다.
// =============================================================================
//
//  SCENARIOS 는 논문 Sec. V-A 의 일곱 시나리오(S1~S7)로 채워져 있습니다.
//  아직 어떤 클립에도 scenario 가 붙어 있지 않아서, 페이지는 시나리오 표만
//  보여 주고 클립은 필터 없이 전부 나열합니다. 아래 RECORDINGS 의 scenario 에
//  코드를 넣기 시작하면 필터 칩과 클립 수가 자동으로 나타납니다.
//
//    code    "R1", "R2", ...  짧은 코드. 표 왼쪽과 클립 배지에 그대로 나옵니다.
//    group   표를 나누는 머리글. 하나만 쓰면 한 덩어리로 나옵니다.
//    title   한 줄 제목
//    detail  한두 문장 설명
//    speeds  "15 / 30 / 50" 처럼 문자열. 단위(km/h)는 페이지가 붙입니다.

const SCENARIOS = [
  { code: "S1", group: "",
    title: "Urban lane keeping",
    detail: "Lane keeping along the urban block grid, 490 m. The only scenario carrying a strict direct R-versus-L1 comparison, aligned by scenario and speed across sessions; L1 covers it from a mid-course point only, about 200 m, at 20 and 40 km/h.",
    speeds: "20 \u2013 50" },

  { code: "S2", group: "",
    title: "Urban right turn",
    detail: "Right turn at an urban intersection. Auxiliary descriptive result with disclosed condition imbalance; one R run.",
    speeds: "" },

  { code: "S3", group: "",
    title: "Urban left turn",
    detail: "Left turn at an urban intersection. Auxiliary descriptive result with disclosed condition imbalance; one R run.",
    speeds: "" },

  { code: "S4", group: "",
    title: "Roundabout",
    detail: "The 67 m roundabout, driven as its own scenario. One R run; not driven by L1.",
    speeds: "" },

  { code: "S5", group: "",
    title: "Highway",
    detail: "The expressway section, 700\u2013890 m, driven in both directions. The five R runs mix speeds across the range rather than repeating one condition, and are reported as a median with the min\u2013max range. L1 failed or aborted here.",
    speeds: "40 / 60 / 80" },

  { code: "S6", group: "",
    title: "GNSS-shadowed zone",
    detail: "The roofed 135 m corridor, entered with a roundabout U-turn. Two of the three RTK-fixed degraded runs are here, one of which failed to initialize and stays in the denominator. Not driven by L1.",
    speeds: "" },

  { code: "S7", group: "",
    title: "Full course",
    detail: "All domains chained into one 4.78 km drive. Driven by R only; L1 failed or aborted.",
    speeds: "up to 100" },
];

//  아래 표에서 각 클립에 시나리오를 붙입니다.
//
//  scenario  위 SCENARIOS 의 code, 또는 "" (미분류)
//  run       대조 실험이 있으면 "baseline" / 그 외 이름, 없으면 "" 로 두세요
//  speed     목표 속도 [km/h], 숫자 또는 ""
//  side      "left" | "right" | ""
//  note      카드 아래 한 줄 메모 (실패 사유 등). "" 이면 안 나옴
//  hidden    true 면 페이지에서 제외

const RECORDINGS = [
  { id: "MAN_20260911_112010", clock: "11:20:10", seconds: 60, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_112349", clock: "11:23:49", seconds: 56, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_112545", clock: "11:25:45", seconds: 52, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_112817", clock: "11:28:17", seconds: 60, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_112909", clock: "11:29:09", seconds: 35, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_113147", clock: "11:31:47", seconds: 60, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_113325", clock: "11:33:25", seconds: 60, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_113851", clock: "11:38:51", seconds: 58, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_114040", clock: "11:40:40", seconds: 60, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_115118", clock: "11:51:18", seconds: 60, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_115735", clock: "11:57:35", seconds: 60, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_132945", clock: "13:29:45", seconds: 60, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_133151", clock: "13:31:51", seconds: 60, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_133335", clock: "13:33:35", seconds: 59, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_150113", clock: "15:01:13", seconds: 60, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_150259", clock: "15:02:59", seconds: 58, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_150435", clock: "15:04:35", seconds: 43, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_150558", clock: "15:05:58", seconds: 45, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_150802", clock: "15:08:02", seconds: 47, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_150952", clock: "15:09:52", seconds: 60, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_151428", clock: "15:14:28", seconds: 60, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_164227", clock: "16:42:27", seconds: 60, scenario: "", run: "", speed: "", side: "", note: "", hidden: false },
];
