export function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();  // 년도
    const month = today.getMonth() + 1;  // 월 (0부터 시작하므로 +1)
    const day = today.getDate();  // 일

    // 숫자를 두 자리 문자열로 포매팅합니다. (예: '01', '02', ...)
    const monthStr = month < 10 ? `0${month}` : `${month}`;
    const dayStr = day < 10 ? `0${day}` : `${day}`;

    // yyyy-mm-dd 형식의 문자열로 반환
    return `${year}-${monthStr}-${dayStr}`;
}