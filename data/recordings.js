// =============================================================================
//  Driving on Radar Alone  -  recording table
//  이 파일만 고치면 페이지 전체가 따라 바뀝니다. HTML 은 건드릴 필요 없습니다.
// =============================================================================
//
//  SCENARIOS 는 논문 Sec. V-A 의 일곱 시나리오(S1~S7)입니다.
//
//    code    "S1", "S2", ...  짧은 코드. 표 왼쪽과 클립 배지에 그대로 나옵니다.
//    group   표를 나누는 머리글. "" 이면 머리글 없이 이어집니다.
//    title   한 줄 제목
//    detail  한두 문장 설명
//    speeds  Table I 의 최고 도달 속도. 단위(km/h)는 페이지가 붙입니다.

const SCENARIOS = [
  { code: "S1", group: "",
    title: "Urban lane keeping",
    detail: "Lane keeping along the urban block grid. Evaluated segment 0.44 km, completed without intervention.",
    speeds: "50" },

  { code: "S2", group: "",
    title: "Urban right turn",
    detail: "Right turn at an urban intersection. Evaluated segment 0.10 km, completed without intervention.",
    speeds: "27" },

  { code: "S3", group: "",
    title: "Urban left turn",
    detail: "Left turn at an urban intersection. Evaluated segment 0.13 km, completed without intervention.",
    speeds: "27" },

  { code: "S4", group: "",
    title: "Roundabout",
    detail: "The roundabout, entered and driven through. Evaluated segment 0.13 km, completed without intervention.",
    speeds: "16" },

  { code: "S5", group: "",
    title: "Highway",
    detail: "The expressway section. Evaluated segment 0.67 km, completed without intervention.",
    speeds: "78" },

  { code: "S6", group: "",
    title: "GNSS shadow",
    detail: "The GNSS-shadowed section, entered with a roundabout U-turn. Evaluated segment 0.71 km, completed without intervention. Run A, one of the two RTK-referenced transitions, was driven here.",
    speeds: "49" },

  { code: "S7", group: "",
    title: "Composite segment",
    detail: "All road types chained into one route. Evaluated segment 4.06 km, completed without intervention; reached 100 km/h once.",
    speeds: "100" },
];

//  각 클립의 시나리오는 같은 주행의 rosbag 에서 확인한 값입니다
//  (Paper/RadarAD/BAG-SCENARIOS.md). 클립은 해당 bag 보다 4~6 초 먼저 시작합니다.
//
//  scenario  위 SCENARIOS 의 code, 또는 "" (시나리오 없는 주행)
//  run       측위원: "radar" | "lidar" | "gnss"
//  speed     그 주행의 실측 최고 속도 [km/h]
//  side      "left" | "right" | ""
//  note      카드 아래 한 줄 메모. "" 이면 안 나옴
//  hidden    true 면 페이지에서 제외

const RECORDINGS = [
  { id: "MAN_20260911_112010", clock: "11:20:10", seconds: 60, scenario: "S1", run: "radar", speed: 50, side: "", note: "", hidden: false },
  { id: "MAN_20260911_112349", clock: "11:23:49", seconds: 56, scenario: "S3", run: "radar", speed: 27, side: "left", note: "", hidden: false },
  { id: "MAN_20260911_112545", clock: "11:25:45", seconds: 52, scenario: "S2", run: "radar", speed: 27, side: "right", note: "", hidden: false },
  { id: "MAN_20260911_112817", clock: "11:28:17", seconds: 60, scenario: "S4", run: "radar", speed: 16, side: "", note: "", hidden: false },
  { id: "MAN_20260911_112909", clock: "11:29:09", seconds: 35, scenario: "S4", run: "radar", speed: 16, side: "", note: "", hidden: false },
  { id: "MAN_20260911_113147", clock: "11:31:47", seconds: 60, scenario: "S5", run: "radar", speed: 78, side: "", note: "", hidden: false },
  { id: "MAN_20260911_113325", clock: "11:33:25", seconds: 60, scenario: "S6", run: "radar", speed: 50, side: "", note: "", hidden: false },
  { id: "MAN_20260911_113851", clock: "11:38:51", seconds: 58, scenario: "",   run: "radar", speed: 17, side: "right", note: "", hidden: false },
  { id: "MAN_20260911_114040", clock: "11:40:40", seconds: 60, scenario: "S7", run: "radar", speed: 50, side: "", note: "", hidden: false },
  { id: "MAN_20260911_115118", clock: "11:51:18", seconds: 60, scenario: "",   run: "radar", speed: 44, side: "", note: "", hidden: false },
  { id: "MAN_20260911_115735", clock: "11:57:35", seconds: 60, scenario: "S7", run: "lidar", speed: 51, side: "", note: "", hidden: false },
  { id: "MAN_20260911_132945", clock: "13:29:45", seconds: 60, scenario: "S6", run: "radar", speed: 47, side: "", note: "", hidden: false },
  { id: "MAN_20260911_133151", clock: "13:31:51", seconds: 60, scenario: "S6", run: "radar", speed: 50, side: "", note: "", hidden: false },
  { id: "MAN_20260911_133335", clock: "13:33:35", seconds: 59, scenario: "S1", run: "radar", speed: 50, side: "", note: "", hidden: false },
  { id: "MAN_20260911_150113", clock: "15:01:13", seconds: 60, scenario: "",   run: "lidar", speed: "", side: "", note: "", hidden: false },
  { id: "MAN_20260911_150259", clock: "15:02:59", seconds: 58, scenario: "S1", run: "lidar", speed: 51, side: "", note: "", hidden: false },
  { id: "MAN_20260911_150435", clock: "15:04:35", seconds: 43, scenario: "S3", run: "lidar", speed: 29, side: "left", note: "", hidden: false },
  { id: "MAN_20260911_150558", clock: "15:05:58", seconds: 45, scenario: "S2", run: "lidar", speed: 25, side: "right", note: "", hidden: false },
  { id: "MAN_20260911_150802", clock: "15:08:02", seconds: 47, scenario: "S4", run: "lidar", speed: 17, side: "", note: "", hidden: false },
  { id: "MAN_20260911_150952", clock: "15:09:52", seconds: 60, scenario: "S5", run: "lidar", speed: 77, side: "", note: "", hidden: false },
  { id: "MAN_20260911_151428", clock: "15:14:28", seconds: 60, scenario: "S6", run: "lidar", speed: 48, side: "", note: "", hidden: false },
];
