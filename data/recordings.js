// =============================================================================
//  RadarAD  -  recording table
//  이 파일만 고치면 페이지 전체가 따라 바뀝니다. HTML 은 건드릴 필요 없습니다.
// =============================================================================
//
//  SCENARIOS 가 비어 있는 동안에는 페이지의 Scenarios 섹션이 통째로 숨겨지고,
//  모든 클립이 필터 없이 그냥 나열됩니다. 아래 주석을 풀고 RadarAD 시나리오를
//  채우면 표와 필터가 자동으로 생깁니다.
//
//    code    "R1", "R2", ...  짧은 코드. 표 왼쪽과 클립 배지에 그대로 나옵니다.
//    group   표를 나누는 머리글. 하나만 쓰면 한 덩어리로 나옵니다.
//    title   한 줄 제목
//    detail  한두 문장 설명
//    speeds  "15 / 30 / 50" 처럼 문자열. 단위(km/h)는 페이지가 붙입니다.

const SCENARIOS = [
  // { code: "R1", group: "Scenarios",
  //   title: "",
  //   detail: "",
  //   speeds: "15 / 30 / 50" },
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
