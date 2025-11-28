import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "개인정보처리방침 - 엄지",
  description: "엄지 서비스의 개인정보처리방침입니다.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/whiteLogo.png"
              alt="엄지 로고"
              width={28}
              height={28}
              className="invert"
            />
            <span className="font-bold text-lg text-gray-900">엄지</span>
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            홈으로
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">개인정보 처리방침</h1>
          <p className="text-gray-500 mb-8">시행일: 2025년 1월 1일</p>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">
              주식회사 엄지 (이하 &quot;회사&quot;)는 「개인정보 보호법」에 따라 이용자의 개인정보를 보호하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
            </p>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제1조 (개인정보의 수집 항목 및 수집 방법)</h2>

              <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">1. 수집하는 개인정보 항목</h3>
              <p className="text-gray-600 mb-4">회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.</p>

              <h4 className="font-medium text-gray-800 mt-4 mb-2">필수 수집 항목</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-2 text-left">수집 항목</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">수집 목적</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr><td className="border border-gray-200 px-4 py-2">아이디</td><td className="border border-gray-200 px-4 py-2">회원 식별 및 로그인</td></tr>
                    <tr><td className="border border-gray-200 px-4 py-2">비밀번호</td><td className="border border-gray-200 px-4 py-2">회원 인증</td></tr>
                    <tr><td className="border border-gray-200 px-4 py-2">이름</td><td className="border border-gray-200 px-4 py-2">회원 식별 및 서비스 제공</td></tr>
                    <tr><td className="border border-gray-200 px-4 py-2">휴대폰 번호</td><td className="border border-gray-200 px-4 py-2">본인 확인, 민원 처리, 공지사항 전달</td></tr>
                    <tr><td className="border border-gray-200 px-4 py-2">동/호수</td><td className="border border-gray-200 px-4 py-2">입주민 확인 및 건물 관리 서비스 제공</td></tr>
                    <tr><td className="border border-gray-200 px-4 py-2">건물 정보</td><td className="border border-gray-200 px-4 py-2">해당 건물 서비스 연결</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-medium text-gray-800 mt-4 mb-2">자동 수집 항목</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>기기 정보 (기기 식별자, 운영체제, 앱 버전)</li>
                <li>서비스 이용 기록 (접속 일시, 이용 기능)</li>
                <li>IP 주소</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">2. 개인정보 수집 방법</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>회원가입 시 이용자가 직접 입력</li>
                <li>서비스 이용 과정에서 자동 생성·수집</li>
              </ul>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제2조 (개인정보의 수집 및 이용 목적)</h2>
              <p className="text-gray-600 mb-4">회사는 수집한 개인정보를 다음의 목적으로 이용합니다.</p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">1. 회원 가입 및 관리</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>회원제 서비스 이용에 따른 본인 확인</li>
                <li>회원 자격 유지·관리</li>
                <li>각종 고지·통지 전달</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2. 건물 관리 서비스 제공</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>입주민 확인 및 권한 부여</li>
                <li>민원 접수 및 처리</li>
                <li>공지사항 및 이벤트 정보 전달</li>
                <li>시설물 예약 서비스 제공</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">3. 서비스 개선</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>서비스 이용 통계 분석</li>
                <li>신규 서비스 개발 및 기존 서비스 개선</li>
                <li>서비스 오류 분석 및 개선</li>
              </ul>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제3조 (개인정보의 보유 및 이용 기간)</h2>
              <p className="text-gray-600 mb-4">
                회사는 개인정보 수집·이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">1. 회사 내부 방침에 의한 보유</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-2 text-left">보유 정보</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">보유 기간</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">보유 사유</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">회원 정보</td>
                      <td className="border border-gray-200 px-4 py-2">회원 탈퇴 시까지</td>
                      <td className="border border-gray-200 px-4 py-2">서비스 제공</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">민원 처리 기록</td>
                      <td className="border border-gray-200 px-4 py-2">3년</td>
                      <td className="border border-gray-200 px-4 py-2">분쟁 해결 및 서비스 개선</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2. 관계 법령에 의한 보유</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-2 text-left">보유 정보</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">보유 기간</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">근거 법령</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">계약 또는 청약철회 기록</td>
                      <td className="border border-gray-200 px-4 py-2">5년</td>
                      <td className="border border-gray-200 px-4 py-2">전자상거래법</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">소비자 불만 또는 분쟁처리 기록</td>
                      <td className="border border-gray-200 px-4 py-2">3년</td>
                      <td className="border border-gray-200 px-4 py-2">전자상거래법</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">접속 기록</td>
                      <td className="border border-gray-200 px-4 py-2">3개월</td>
                      <td className="border border-gray-200 px-4 py-2">통신비밀보호법</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제4조 (개인정보의 제3자 제공)</h2>
              <p className="text-gray-600 mb-4">
                회사는 이용자의 개인정보를 제2조에서 명시한 범위 내에서만 처리하며,
                이용자의 사전 동의 없이는 본래의 목적 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">1. 제3자 제공 현황</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-2 text-left">제공받는 자</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">제공 목적</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">제공 항목</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">보유 기간</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">건물 관리자</td>
                      <td className="border border-gray-200 px-4 py-2">민원 처리, 입주민 관리</td>
                      <td className="border border-gray-200 px-4 py-2">이름, 동/호수, 휴대폰 번호, 민원 내용</td>
                      <td className="border border-gray-200 px-4 py-2">회원 탈퇴 시까지</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2. 예외 사항</h3>
              <p className="text-gray-600 mb-2">다음의 경우에는 이용자의 동의 없이 개인정보를 제공할 수 있습니다.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>법령에 특별한 규정이 있는 경우</li>
                <li>수사 기관의 적법한 요청이 있는 경우</li>
                <li>이용자 또는 제3자의 생명, 신체, 재산의 보호를 위해 긴급히 필요한 경우</li>
              </ul>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제5조 (이용자의 권리·의무 및 행사 방법)</h2>
              <p className="text-gray-600 mb-4">이용자는 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">1. 이용자의 권리</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li><strong>열람권</strong>: 본인의 개인정보 처리 현황을 열람할 권리</li>
                <li><strong>정정권</strong>: 개인정보의 오류에 대한 정정을 요구할 권리</li>
                <li><strong>삭제권</strong>: 개인정보의 삭제를 요구할 권리</li>
                <li><strong>처리정지권</strong>: 개인정보 처리의 정지를 요구할 권리</li>
                <li><strong>동의철회권</strong>: 개인정보 수집·이용에 대한 동의를 철회할 권리</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2. 권리 행사 방법</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>앱 내 [설정 &gt; 개인정보] 메뉴에서 직접 처리</li>
                <li>개인정보 보호책임자에게 서면, 전화, 이메일로 요청</li>
                <li>요청 시 본인 확인 절차를 거친 후 처리</li>
              </ul>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제6조 (개인정보의 파기 절차 및 방법)</h2>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">1. 파기 절차</h3>
              <p className="text-gray-600">
                회사는 개인정보의 수집·이용 목적이 달성되거나 보유 기간이 경과한 경우, 해당 개인정보를 지체 없이 파기합니다.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2. 파기 방법</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li><strong>전자적 파일</strong>: 복구 및 재생이 불가능한 방법으로 영구 삭제</li>
                <li><strong>종이 문서</strong>: 분쇄기로 분쇄하거나 소각</li>
              </ul>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제7조 (개인정보의 안전성 확보 조치)</h2>
              <p className="text-gray-600 mb-4">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">1. 관리적 조치</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>내부 관리 계획 수립 및 시행</li>
                <li>개인정보 취급 직원 최소화 및 교육</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2. 기술적 조치</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>개인정보 암호화 (비밀번호 등 민감 정보)</li>
                <li>해킹 등에 대비한 보안 시스템 운영</li>
                <li>접근 권한 관리 및 접근 통제</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">3. 물리적 조치</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>전산실, 자료 보관실 등의 접근 통제</li>
              </ul>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제8조 (권익침해 구제 방법)</h2>
              <p className="text-gray-600 mb-4">이용자는 개인정보 침해로 인한 피해를 구제받기 위하여 아래의 기관에 분쟁 해결이나 상담 등을 신청할 수 있습니다.</p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-2 text-left">기관명</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">연락처</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">홈페이지</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">개인정보 침해신고센터</td>
                      <td className="border border-gray-200 px-4 py-2">118 (국번 없이)</td>
                      <td className="border border-gray-200 px-4 py-2">privacy.kisa.or.kr</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">개인정보 분쟁조정위원회</td>
                      <td className="border border-gray-200 px-4 py-2">1833-6972</td>
                      <td className="border border-gray-200 px-4 py-2">www.kopico.go.kr</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">대검찰청 사이버수사과</td>
                      <td className="border border-gray-200 px-4 py-2">1301 (국번 없이)</td>
                      <td className="border border-gray-200 px-4 py-2">www.spo.go.kr</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">경찰청 사이버안전국</td>
                      <td className="border border-gray-200 px-4 py-2">182 (국번 없이)</td>
                      <td className="border border-gray-200 px-4 py-2">cyberbureau.police.go.kr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="my-8 border-gray-200" />

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제9조 (개인정보 처리방침의 변경)</h2>
              <p className="text-gray-600 mb-4">
                이 개인정보 처리방침은 2025년 1월 1일부터 적용됩니다.
              </p>
              <p className="text-gray-600">
                개인정보 처리방침이 변경되는 경우, 변경 사항을 시행일 7일 전부터 앱 공지사항을 통해 고지합니다.
              </p>
            </section>

            <hr className="my-8 border-gray-200" />

            <div className="text-center text-gray-500 text-sm">
              <p>공고일: 2025년 1월 1일</p>
              <p>시행일: 2025년 1월 1일</p>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm">
          <p>&copy; 2025 엄지. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
