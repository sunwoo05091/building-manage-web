import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "이용약관 - 엄지",
  description: "엄지 서비스의 이용약관입니다.",
};

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">서비스 이용약관</h1>
          <p className="text-gray-500 mb-8">시행일: 2025년 1월 1일</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제1조 (목적)</h2>
              <p className="text-gray-600 leading-relaxed">
                이 약관은 주식회사 엄지 (이하 &quot;회사&quot;)가 제공하는 건물 관리 서비스(이하 &quot;서비스&quot;)의 이용과 관련하여
                회사와 이용자 간의 권리, 의무 및 책임 사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제2조 (용어의 정의)</h2>
              <p className="text-gray-600 mb-4">이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li><strong>&quot;서비스&quot;</strong>: 회사가 제공하는 건물 관리 모바일 애플리케이션 및 관련 서비스</li>
                <li><strong>&quot;이용자&quot;</strong>: 이 약관에 따라 회사가 제공하는 서비스를 이용하는 회원</li>
                <li><strong>&quot;회원&quot;</strong>: 회사와 서비스 이용계약을 체결하고 이용자 아이디를 부여받은 자</li>
                <li><strong>&quot;아이디(ID)&quot;</strong>: 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인하는 문자와 숫자의 조합</li>
                <li><strong>&quot;비밀번호&quot;</strong>: 회원이 부여받은 아이디와 일치하는 회원임을 확인하고 비밀 보호를 위해 회원 자신이 정한 문자, 숫자 또는 특수문자의 조합</li>
                <li><strong>&quot;입주민&quot;</strong>: 서비스에 등록된 건물에 거주하는 회원</li>
                <li><strong>&quot;관리자&quot;</strong>: 건물의 관리를 담당하는 회원</li>
                <li><strong>&quot;민원&quot;</strong>: 입주민이 건물 관리에 관하여 관리자에게 제기하는 요청 또는 문의</li>
              </ol>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제3조 (약관의 게시 및 변경)</h2>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">1. 약관의 게시</h3>
              <p className="text-gray-600 mb-4">
                회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 내 또는 회사 홈페이지에 게시합니다.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2. 약관의 변경</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 pl-4">
                <li>회사는 관련 법령을 위배하지 않는 범위에서 이 약관을 변경할 수 있습니다.</li>
                <li>회사가 약관을 변경하는 경우 적용일 및 변경 사유를 명시하여 현행 약관과 함께 서비스 내 공지사항으로 적용일 7일 전부터 공지합니다.</li>
                <li>회원이 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단하고 회원 탈퇴를 할 수 있습니다.</li>
                <li>변경된 약관의 적용일 이후에도 서비스를 계속 이용하는 경우, 변경된 약관에 동의한 것으로 봅니다.</li>
              </ol>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제4조 (서비스 이용계약의 체결)</h2>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">1. 이용계약의 성립</h3>
              <p className="text-gray-600 mb-4">
                서비스 이용계약은 회원이 되고자 하는 자가 이 약관에 동의하고, 회사가 정한 절차에 따라 회원가입을 신청하며,
                회사가 이를 승낙함으로써 체결됩니다.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2. 회원가입 신청</h3>
              <p className="text-gray-600 mb-2">회원가입 신청 시 다음의 정보를 제공해야 합니다.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>아이디, 비밀번호</li>
                <li>이름, 휴대폰 번호</li>
                <li>거주 건물, 동, 호수</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">3. 승인 거부 또는 유보</h3>
              <p className="text-gray-600 mb-2">회사는 다음 각 호에 해당하는 경우 회원가입 신청을 거부하거나 승인을 유보할 수 있습니다.</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-1 pl-4">
                <li>실명이 아닌 정보 또는 타인의 정보를 사용한 경우</li>
                <li>허위 정보를 기재하거나 필수 정보를 기재하지 않은 경우</li>
                <li>해당 건물의 입주민이 아닌 경우</li>
                <li>이전에 이 약관을 위반하여 회원 자격을 상실한 적이 있는 경우</li>
                <li>기타 회사의 서비스 운영에 지장을 초래하는 경우</li>
              </ol>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">4. 관리자 승인</h3>
              <p className="text-gray-600">
                입주민 회원의 경우, 해당 건물 관리자의 승인을 받아야 서비스를 정상적으로 이용할 수 있습니다.
              </p>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제5조 (회원 정보의 변경)</h2>
              <p className="text-gray-600">
                회원은 개인정보 관리 화면을 통해 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다.
                단, 서비스 운영에 필요한 아이디, 건물 정보 등은 수정이 제한될 수 있습니다.
              </p>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제6조 (회원의 아이디 및 비밀번호 관리)</h2>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>회원은 자신의 아이디와 비밀번호를 관리할 책임이 있습니다.</li>
                <li>회원은 자신의 아이디와 비밀번호를 제3자에게 이용하게 해서는 안 됩니다.</li>
                <li>회원이 자신의 아이디와 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우, 즉시 회사에 통지하고 회사의 안내에 따라야 합니다.</li>
                <li>위 3항의 경우 회원이 회사에 통지하지 않거나, 회사의 안내에 따르지 않아 발생한 불이익에 대해 회사는 책임지지 않습니다.</li>
              </ol>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제7조 (서비스의 제공)</h2>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">1. 제공 서비스</h3>
              <p className="text-gray-600 mb-2">회사가 제공하는 서비스는 다음과 같습니다.</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-1 pl-4">
                <li>건물 공지사항 및 이벤트 정보 제공</li>
                <li>민원 접수 및 처리 현황 조회</li>
                <li>시설물 예약 서비스</li>
                <li>입주민 커뮤니티 서비스</li>
                <li>기타 회사가 추가 개발하거나 제휴를 통해 제공하는 서비스</li>
              </ol>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2. 서비스 이용 시간</h3>
              <p className="text-gray-600">
                서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 단, 시스템 점검, 증설, 교체, 고장 등의 사유로
                서비스가 일시 중단될 수 있으며, 이 경우 사전에 공지합니다.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">3. 서비스 변경 및 중단</h3>
              <p className="text-gray-600">
                회사는 서비스 개선을 위해 서비스의 내용을 변경할 수 있으며, 불가피한 사유가 있는 경우
                서비스의 전부 또는 일부를 중단할 수 있습니다.
              </p>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제8조 (회원의 의무)</h2>
              <p className="text-gray-600 mb-4">회원은 다음 행위를 하여서는 안 됩니다.</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>회원가입 신청 또는 정보 변경 시 허위 내용 등록</li>
                <li>타인의 정보 도용</li>
                <li>회사가 게시한 정보의 무단 변경</li>
                <li>회사가 허용하지 않은 정보(컴퓨터 프로그램 등)의 송신 또는 게시</li>
                <li>회사 또는 제3자의 저작권 등 지적재산권 침해</li>
                <li>회사 또는 제3자의 명예 손상 또는 업무 방해</li>
                <li>외설적이거나 폭력적인 정보, 기타 공서양속에 반하는 정보의 게시</li>
                <li>서비스의 안정적 운영을 방해하는 행위</li>
                <li>기타 관련 법령 또는 이 약관에서 금지하는 행위</li>
              </ol>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제9조 (게시물의 관리)</h2>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">1. 회원의 게시물</h3>
              <p className="text-gray-600 mb-4">
                회원이 서비스 내에 게시한 게시물의 저작권은 해당 회원에게 귀속됩니다.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2. 게시물의 삭제</h3>
              <p className="text-gray-600 mb-2">회사는 다음 각 호에 해당하는 게시물을 사전 통지 없이 삭제하거나 비공개 처리할 수 있습니다.</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-1 pl-4">
                <li>다른 회원 또는 제3자를 비방하거나 명예를 손상시키는 내용</li>
                <li>공공질서 및 미풍양속에 위반되는 내용</li>
                <li>범죄적 행위에 결부된다고 인정되는 내용</li>
                <li>회사의 저작권, 제3자의 저작권 등 권리를 침해하는 내용</li>
                <li>회사가 규정한 게시물 원칙에 어긋나거나 게시판 성격에 부합하지 않는 내용</li>
                <li>기타 관련 법령에 위반되는 내용</li>
              </ol>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제10조 (서비스 이용의 제한 및 정지)</h2>
              <p className="text-gray-600 mb-4">회사는 회원이 다음 각 호에 해당하는 경우, 서비스 이용을 제한하거나 정지할 수 있습니다.</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>이 약관의 의무를 위반한 경우</li>
                <li>서비스의 정상적인 운영을 방해한 경우</li>
                <li>타인의 명예를 손상시키거나 불이익을 주는 행위를 한 경우</li>
                <li>회사, 다른 회원 또는 제3자의 지적재산권을 침해한 경우</li>
                <li>기타 회사가 합리적인 판단에 의하여 서비스 제공을 거부할 필요가 있다고 인정한 경우</li>
              </ol>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제11조 (회원 탈퇴 및 자격 상실)</h2>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">1. 회원 탈퇴</h3>
              <p className="text-gray-600 mb-4">
                회원은 언제든지 서비스 내 설정 메뉴를 통해 탈퇴를 요청할 수 있으며, 회사는 즉시 회원 탈퇴를 처리합니다.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2. 자격 상실</h3>
              <p className="text-gray-600 mb-2">회사는 다음 각 호의 사유에 해당하는 경우 회원 자격을 상실시킬 수 있습니다.</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-1 pl-4">
                <li>가입 신청 시 허위 내용을 등록한 경우</li>
                <li>서비스 이용과 관련하여 회원이 부담하는 채무를 기일에 이행하지 않는 경우</li>
                <li>다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</li>
                <li>서비스를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
              </ol>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제12조 (손해배상)</h2>
              <p className="text-gray-600">
                회사 또는 회원이 이 약관의 규정을 위반하여 상대방에게 손해가 발생한 경우,
                귀책사유 있는 당사자는 상대방에게 발생한 손해를 배상할 책임이 있습니다.
              </p>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제13조 (면책)</h2>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">1. 회사의 면책</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 pl-4">
                <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우 서비스 제공에 관한 책임이 면제됩니다.</li>
                <li>회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대해 책임을 지지 않습니다.</li>
                <li>회사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대해 책임을 지지 않으며, 그 밖의 서비스를 통해 얻은 자료로 인한 손해에 관해 책임을 지지 않습니다.</li>
                <li>회사는 회원이 게재한 정보, 자료의 신뢰도, 정확성 등에 대해서는 책임을 지지 않습니다.</li>
              </ol>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2. 민원 처리</h3>
              <p className="text-gray-600">
                민원의 처리는 해당 건물 관리자의 책임 하에 이루어지며, 회사는 민원 처리 결과에 대해 직접적인 책임을 지지 않습니다.
              </p>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제14조 (분쟁 해결)</h2>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>회사와 회원 간에 발생한 전자상거래 분쟁에 관한 소송은 대한민국 법원에 제기합니다.</li>
                <li>회사와 회원 간에 제기된 전자상거래 소송에는 대한민국 법률을 적용합니다.</li>
              </ol>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제15조 (기타)</h2>
              <p className="text-gray-600">
                이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 관계 법령 또는 상관례에 따릅니다.
              </p>
            </section>

            <hr className="my-8 border-gray-200" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">부칙</h2>
              <p className="text-gray-600">이 약관은 2025년 1월 1일부터 시행합니다.</p>
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
