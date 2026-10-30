// 빼빼한의원 피부미용 문진 - 문항 및 시술 목록 정의 (skin.html, admin.html 피부 탭 공용)
// 이름/성별/연락처/생년월일은 문진 앞부분(정보입력 단계)에서 따로 받기 때문에 SKIN_Q에는 포함하지 않습니다.
//
// cond: 이 문항을 보여줄지 결정하는 함수. 인자로 현재 답변 객체(ans)를 받습니다.
//       성별은 전역 selectedGender(skin.html / admin.html 양쪽에 존재)를 참조합니다.
// required: true면 답하지 않고는 다음으로 넘어갈 수 없습니다 (시술 안전과 직결되는 문항).
// none: 복수선택 문항에서 이 보기를 고르면 나머지 선택이 해제됩니다 (예: "해당 없음").

const SKIN_NONE = "해당 없음";

const SKIN_Q = [
// ===== 피부 고민 =====
{id:"concerns", cat:"피부 고민", title:"현재 가장 신경 쓰이는 피부 고민을 모두 선택해주세요.", type:"multi", required:true,
 opts:[
   "주름 (눈가, 팔자, 이마 등)",
   "탄력 저하 (처짐, 늘어짐 등)",
   "기미, 잡티, 색소침착",
   "칙칙한 피부톤",
   "넓은 모공",
   "여드름 / 흉터",
   "피부 붉음(홍조) / 민감성",
   "편평사마귀 / 점 / 검버섯",
   "눈밑 꺼짐 / 눈밑 지방",
   "이중턱 / 얼굴 윤곽",
   "탈모",
   "기타"
 ]},

{id:"concerns_etc", cat:"피부 고민", title:"기타 고민을 적어주세요.", type:"text",
 cond:function(ans){ return (ans.concerns || []).includes("기타"); }},

{id:"top_concern", cat:"피부 고민", title:"그중 가장 먼저 해결하고 싶은 고민은 무엇인가요?", type:"text",
 hint:"예: 양쪽 볼 기미가 진해져서 화장으로 잘 안 가려져요."},

{id:"skin_type", cat:"피부 고민", title:"피부 타입은 어떤가요?", type:"single",
 opts:["건성","지성","복합성","민감성","잘 모르겠다"]},

{id:"satisfaction", cat:"피부 고민", title:"현재 피부 상태는 어떠신가요?", type:"single",
 opts:["만족함","보통","많이 신경 쓰임"]},

// ===== 기대 효과 =====
{id:"expected", cat:"시술 기대", title:"시술로 기대하는 효과를 모두 선택해주세요.", type:"multi",
 opts:[
   "주름 개선",
   "피부톤 밝아짐",
   "리프팅 / 탄력 개선",
   "수분 / 보습 강화",
   "피부결 / 모공 개선",
   "색소(기미·잡티) 개선",
   "여드름 / 흉터 개선"
 ]},

{id:"interest", cat:"시술 기대", title:"관심 있는 시술이 있다면 모두 선택해주세요.", type:"multi",
 hint:"정해두신 시술이 없어도 괜찮습니다. 원장님 상담 후 결정하시면 됩니다.",
 none:"아직 모르겠다 (상담 후 결정)",
 opts:[
   "토닝 (기미·잡티·피부톤)",
   "LDM (수분·진정)",
   "리프팅 (울리지오X, k-온다)",
   "실리프팅 (채움, 모노)",
   "스킨부스터 (ECM, 라이트라인, PLLA, 알트코어, PDRN 등)",
   "콜라겐부스터 / 탄력부스터",
   "약침 (동안, 주름, 팔자주름)",
   "약침 (이중턱, 다이어트)",
   "약침 (탈모)",
   "라라필",
   "다채움 (눈밑지방 개선)",
   "편평사마귀 / 점 / 검버섯 제거",
   "아직 모르겠다 (상담 후 결정)"
 ]},

{id:"downtime", cat:"시술 기대", title:"시술 후 붉어짐, 멍, 딱지 같은 회복 기간은 어느 정도까지 괜찮으세요?", type:"single",
 opts:["바로 일상생활이 가능해야 한다","1~3일 정도는 괜찮다","1주일 정도는 괜찮다","효과가 좋다면 상관없다"]},

{id:"schedule", cat:"시술 기대", title:"결혼식, 촬영, 면접처럼 앞두고 있는 중요한 일정이 있나요?", type:"single",
 opts:["특별한 일정 없음","2주 이내","1개월 이내","1~3개월 이내"]},

// ===== 관리 습관·시술 이력 =====
{id:"skincare", cat:"관리 습관", title:"평소 피부 관리 방법을 모두 선택해주세요.", type:"multi",
 opts:[
   "기초화장품만 사용",
   "미백/주름 기능성 화장품 사용",
   "레티놀 등 고기능성 성분 사용",
   "홈케어 기기 사용",
   "피부과/에스테틱 이용"
 ]},

{id:"sunscreen", cat:"관리 습관", title:"자외선 차단제는 얼마나 자주 바르시나요?", type:"single",
 opts:["매일 바른다","외출할 때만 바른다","거의 바르지 않는다"]},

{id:"prev_treatments", cat:"시술 이력", title:"기존에 받아보신 시술을 모두 선택해주세요.", type:"multi", required:true,
 none:"없음",
 opts:[
   "없음",
   "레이저 (예: IPL, 프락셀, 리프팅 등)",
   "스킨부스터 (리쥬란, 샤넬, 힐, 엑소좀 등)",
   "보톡스 / 필러",
   "실리프팅",
   "기타"
 ]},

{id:"prev_detail", cat:"시술 이력", title:"언제, 어떤 시술을 받으셨고 만족도는 어떠셨나요?", type:"text",
 hint:"예: 작년 5월 리쥬란 3회, 피부결은 좋아졌지만 통증이 심했어요.",
 cond:function(ans){ const v = ans.prev_treatments || []; return v.length > 0 && !v.includes("없음"); }},

{id:"trouble", cat:"시술 이력", title:"시술이나 화장품으로 피부 트러블, 부작용을 겪은 적이 있나요?", type:"single", required:true,
 opts:["없음","있음"]},

{id:"trouble_detail", cat:"시술 이력", title:"어떤 증상이었는지, 원인이 된 시술이나 제품을 적어주세요.", type:"text",
 cond:function(ans){ return ans.trouble === "있음"; }},

{id:"recent_irritation", cat:"시술 이력", title:"최근 2주 안에 피부에 자극이 되는 시술이나 제품을 사용하셨나요?", type:"single", required:true,
 hint:"필링, 레이저, 왁싱, 레티놀, 각질제거제, 강한 햇빛 노출(일광화상) 등",
 opts:["없음","있음"]},

{id:"recent_irritation_detail", cat:"시술 이력", title:"어떤 시술이나 제품인지, 언제 하셨는지 적어주세요.", type:"text",
 cond:function(ans){ return ans.recent_irritation === "있음"; }},

// ===== 건강 상태·시술 안전 =====
{id:"preg_lactation", cat:"건강·안전", title:"임신 / 수유 / 임신 가능성에 해당하는 것을 모두 선택해주세요.", type:"multi", required:true,
 hint:"시술 종류에 따라 임신·수유 중에는 진행할 수 없어 안전 확인용으로 여쭤봅니다.",
 none:SKIN_NONE,
 opts:["임신 중","수유 중","임신 가능성 있음",SKIN_NONE],
 cond:function(){ return selectedGender === "여자"; }},

{id:"safety", cat:"건강·안전", title:"해당하는 것을 모두 선택해주세요.", type:"multi", required:true,
 none:SKIN_NONE,
 opts:[
   "피부가 매우 민감하거나 얇다",
   "최근 2주 내 필러/보톡스 시술",
   "만성 피부질환 (아토피, 지루성피부염, 건선 등)",
   "헤르페스(입술 물집)가 자주 생긴다",
   "상처가 나면 흉이 크게 부풀어 오른다 (켈로이드)",
   "피가 잘 멎지 않거나 멍이 잘 든다",
   "당뇨 / 자가면역질환",
   "심박조율기, 금속 보형물 등 몸속 장치가 있다",
   SKIN_NONE,
   "기타"
 ]},

{id:"safety_detail", cat:"건강·안전", title:"선택하신 내용을 자세히 적어주세요.", type:"text",
 hint:"예: 아토피(현재 목 부위 약간), 작년 턱 보형물 수술",
 cond:function(ans){ const v = ans.safety || []; return v.length > 0 && !v.includes(SKIN_NONE); }},

{id:"allergy", cat:"건강·안전", title:"알레르기가 있다면 모두 선택해주세요.", type:"multi", required:true,
 none:SKIN_NONE,
 opts:[
   "마취크림 / 국소마취제",
   "약침 / 한약 / 특정 약재",
   "항생제 / 소염진통제",
   "금속",
   "특정 화장품 성분",
   SKIN_NONE,
   "기타"
 ]},

{id:"allergy_detail", cat:"건강·안전", title:"어떤 성분에 어떤 반응이 있었는지 적어주세요.", type:"text",
 cond:function(ans){ const v = ans.allergy || []; return v.length > 0 && !v.includes(SKIN_NONE); }},

{id:"meds", cat:"건강·안전", title:"현재 복용 중인 약을 모두 선택해주세요.", type:"multi", required:true,
 none:SKIN_NONE,
 opts:[
   "아스피린, 와파린 등 혈액을 묽게 하는 약",
   "여드름약 (로아큐탄 등 이소트레티노인)",
   "스테로이드제",
   "항생제",
   "호르몬제 / 피임약",
   SKIN_NONE,
   "기타"
 ]},

{id:"meds_detail", cat:"건강·안전", title:"복용 중인 약 또는 영양제 이름을 적어주세요.", type:"text",
 hint:"영양제만 드시는 경우에도 적어주세요."},

{id:"recent_health", cat:"건강·안전", title:"최근 1개월 안에 특별한 건강 문제가 있었나요?", type:"text",
 hint:"없으면 비워두셔도 됩니다. 예: 수술, 입원, 고열, 대상포진 등"},

// ===== 마무리 =====
{id:"motive", cat:"마무리", title:"시술을 알아보게 된 계기는 무엇인가요?", type:"multi",
 opts:[
   "소개/지인 추천",
   "인터넷/광고",
   "직접 검색",
   "특별한 일정 전 준비 (예: 결혼식, 인터뷰 등)",
   "기타"
 ]},

{id:"goal", cat:"마무리", title:"기대하는 피부 상태나 목표가 있다면 자유롭게 적어주세요.", type:"text"},

{id:"worry", cat:"마무리", title:"시술에 대해 궁금하거나 걱정되는 점이 있다면 적어주세요.", type:"text"},

{id:"referral", cat:"마무리", title:"빼빼한의원을 어떻게 아셨나요?", type:"text",
 hint:"소개로 아셨다면 소개자 성함을 적어주세요."}
];

// 한약/다이어트 문진의 visibleQ/visibleDietQ와 대응. 조건부(cond) 문항을 걸러 실제로 보여줄 문항만 돌려줍니다.
function visibleSkinQ(ans) {
  return SKIN_Q.filter(function(q){ return !q.cond || q.cond(ans); });
}

// 보기를 고르거나 해제합니다. 환자 화면(skin.html)과 관리자페이지가 같은 규칙을 쓰도록 여기에 둡니다.
function applySkinPick(ans, q, val) {
  if (q.type === 'single') {
    if (ans[q.id] === val) delete ans[q.id];
    else ans[q.id] = val;
    return;
  }
  let cur = ans[q.id] || [];
  if (cur.includes(val)) cur = cur.filter(function(v){ return v !== val; });
  else if (q.none && val === q.none) cur = [val];
  else cur = cur.filter(function(v){ return v !== q.none; }).concat([val]);
  if (cur.length) ans[q.id] = cur;
  else delete ans[q.id];
}

// 답변을 사람이 읽기 쉬운 텍스트로 정리 (구글시트 "문진 요약" 칸에 저장되는 내용)
function buildSkinSummary(ans) {
  const lines = [];
  visibleSkinQ(ans).forEach(function(q) {
    const val = ans[q.id];
    if (val === undefined || val === '') return;
    const valText = Array.isArray(val) ? val.join(', ') : val;
    lines.push('[' + q.cat + '] ' + q.title + ': ' + valText);
  });
  return lines.join('\n');
}

// 시술 내역표(가격표). 가격이 바뀌면 이 목록만 고치면 관리자페이지의 시술 계획과 AI 분석에 함께 반영됩니다.
// 시술 계획에 담을 때 그 시점의 가격을 함께 저장하므로, 여기서 가격을 고쳐도 지난 기록은 바뀌지 않습니다.
// fromPrice: true면 "개당 5,000원~"처럼 시작 가격이라는 뜻입니다.
const SKIN_TREATMENTS = [
{cat:"토닝·LDM", name:"듀얼레이저토닝", options:[{label:"1회",price:50000},{label:"10회",price:350000}]},
{cat:"토닝·LDM", name:"GD토닝", options:[{label:"1회",price:150000},{label:"4회",price:420000}]},
{cat:"토닝·LDM", name:"LDM", options:[{label:"1회",price:50000},{label:"10회",price:350000}]},
{cat:"토닝·LDM", name:"토닝+LDM", options:[{label:"1회",price:100000},{label:"10회",price:660000}]},

{cat:"리프팅", name:"울리지오X", options:[{label:"300샷 1회",price:450000},{label:"3회",price:945000}]},
{cat:"리프팅", name:"k-온다리프팅", options:[{label:"6만줄 1회",price:150000},{label:"3회",price:315000}]},

{cat:"실리프팅·부스터", name:"채움", options:[{label:"4줄",price:600000},{label:"1줄 추가",price:100000}]},
{cat:"실리프팅·부스터", name:"모노", options:[{label:"10줄",price:100000},{label:"1줄 추가",price:9000}]},
{cat:"실리프팅·부스터", name:"콜라겐부스터/탄력부스터", options:[{label:"2cc",price:300000}]},

{cat:"스킨부스터", name:"ECM (진피재생약침)", options:[{label:"1회",price:500000},{label:"4회",price:1400000}]},
{cat:"스킨부스터", name:"주름전용 (라이트라인)", options:[{label:"1회",price:400000},{label:"4회",price:1120000}]},
{cat:"스킨부스터", name:"PLLA", options:[{label:"1회",price:300000},{label:"4회",price:840000}]},
{cat:"스킨부스터", name:"알트코어", options:[{label:"1회",price:250000},{label:"4회",price:700000}]},
{cat:"스킨부스터", name:"PDRN (라디슈)", options:[{label:"1회",price:250000},{label:"4회",price:700000}]},
{cat:"스킨부스터", name:"줄기세포 (STC20)", options:[{label:"1회",price:250000},{label:"4회",price:700000}]},
{cat:"스킨부스터", name:"쉘리사", options:[{label:"1회",price:150000},{label:"4회",price:420000}]},
{cat:"스킨부스터", name:"TIN/QT-CELL", options:[{label:"1회",price:120000},{label:"4회",price:336000}]},

{cat:"약침", name:"동안 약침", options:[{label:"1회",price:150000},{label:"6회",price:630000}]},
{cat:"약침", name:"팔자주름 약침", options:[{label:"1회",price:150000},{label:"6회",price:630000}]},
{cat:"약침", name:"주름 약침 (잔주름/목주름)", options:[{label:"1회",price:300000},{label:"3회",price:630000}]},
{cat:"약침", name:"케라틴약침", options:[{label:"1회",price:150000},{label:"6회",price:630000}]},
{cat:"약침", name:"탈모 약침", options:[{label:"1회",price:100000},{label:"12회",price:840000}]},
{cat:"약침", name:"이중턱 약침", options:[{label:"1회",price:100000},{label:"6회",price:420000}]},
{cat:"약침", name:"다이어트 약침", options:[{label:"1회",price:50000},{label:"10회",price:350000}]},

{cat:"기타시술", name:"라라필", options:[{label:"1회",price:100000},{label:"6회",price:420000}]},
{cat:"기타시술", name:"다채움 (눈밑지방 개선)", options:[{label:"1회",price:500000},{label:"3회",price:1000000}]},

{cat:"편평사마귀·점·검버섯", name:"편평사마귀 - 얼굴", options:[{label:"1회",price:149000}]},
{cat:"편평사마귀·점·검버섯", name:"편평사마귀 - 목", options:[{label:"1회",price:99000}]},
{cat:"편평사마귀·점·검버섯", name:"편평사마귀 - 상반신 택1 (앞/뒤)", options:[{label:"1회",price:249000}]},
{cat:"편평사마귀·점·검버섯", name:"점/쥐젓", options:[{label:"개당",price:5000,fromPrice:true}]},
{cat:"편평사마귀·점·검버섯", name:"검버섯", options:[{label:"개당",price:10000,fromPrice:true}]}
];

// AI 분석에 함께 보낼 시술 목록 텍스트. AI가 이 목록 밖의 시술을 추천하지 않도록 합니다.
function buildSkinCatalogText() {
  return SKIN_TREATMENTS.map(function(t) {
    const opts = t.options.map(function(o) {
      return o.label + ' ' + o.price.toLocaleString('ko-KR') + '원' + (o.fromPrice ? '~' : '');
    }).join(' / ');
    return '[' + t.cat + '] ' + t.name + ': ' + opts;
  }).join('\n');
}
