/**
 * BETS-UI-0701
 * Test RAW Data
 * Test 공정에서 발생한 RAW Data를 조회한다
 *
 * BETS-UI-0702
 * TDBI RAW Data
 * TDBI 공정에서 발생한 RAW Data를 조회한다
 *
 * 두 화면의 조회 테이블이 같고, 조회 파리미터의 값만 달라지기 때문에 같은 모델을 사용한다
 */
export class RawData {
    fileType: string;
    location: string;
    fileName: string;
    createDate: string;
    createDateStart: string;
    createDateEnd: string;
}