// 0.3초(300ms) 동안 대기하는 함수
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function clickExactReceiveButtons() {
    // 클릭 가능한 후보 요소들을 모두 가져옵니다.
    const elements = Array.from(document.querySelectorAll('button, a, div[role="button"], span'));
    
    // 텍스트가 정확히 '받기'인 요소만 필터링합니다. (앞뒤 공백 제거)
    const targetButtons = elements.filter(el => el.textContent.trim() === '받기');

    if (targetButtons.length === 0) {
        console.log("화면에서 정확히 '받기'라고 적힌 버튼을 찾지 못했습니다.");
        return;
    }

    console.log(`총 ${targetButtons.length}개의 '받기' 버튼을 찾았습니다. 0.3초 간격으로 클릭합니다.`);

    for (let i = 0; i < targetButtons.length; i++) {
        targetButtons[i].click();
        console.log(`${i + 1}번째 버튼 클릭!`);
        
        // 마지막 버튼이 아니라면 0.3초 대기
        if (i < targetButtons.length - 1) {
            await delay(300); 
        }
    }

    console.log('모든 받기 버튼 클릭 완료!');
}

// 함수 실행
clickExactReceiveButtons();
