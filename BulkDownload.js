// 0.2초(200ms) 동안 대기하는 함수
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function clickOnlyActualButtons() {
    // 일반 span, div 텍스트를 제외하고 진짜 '버튼' 역할을 하는 태그들만 수집
    const interactiveElements = Array.from(document.querySelectorAll('button, a, [role="button"], input[type="button"]'));
    
    // 그 중 텍스트가 정확히 '받기'인 것만 필터링
    const realButtons = interactiveElements.filter(el => el.textContent.trim() === '받기');

    if (realButtons.length === 0) {
        console.log("조건(버튼 태그 + '받기' 텍스트)에 일치하는 버튼을 찾지 못했습니다.");
        console.log("팁: 버튼 우클릭 후 '검사'를 눌러 태그 이름을 확인해 보세요!");
        return;
    }

    console.log(`확인된 '받기' 버튼 총 ${realButtons.length}개. 0.2초 간격으로 클릭을 시작합니다.`);

    for (let i = 0; i < realButtons.length; i++) {
        realButtons[i].click();
        console.log(`${i + 1}번째 버튼 클릭 완료`);
        
        // 마지막 버튼이 아니라면 0.3초 대기
        if (i < realButtons.length - 1) {
            await delay(200); 
        }
    }

    console.log('선택한 모든 버튼의 클릭 작업이 끝났습니다!');
}

// 함수 실행
clickOnlyActualButtons();
