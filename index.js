/**
 * Input:Điểm thi 3 môn
 *       Khu vực ưu tiên   
 *       Đối tượng ưu tiên
 * 
 * 
 * Process:  
 *          Tính area 
 *          function caclScoreArea 
 *          Tính subject
 *          function caclScoreObject
 * 
 * 
 *          Tạo function totalScore
 *          Tạo biến , score1, score2 , score3 ,subject, area ,priority
 *          
 *          
 *          priority = area + subject
 *          totalScore = score1 + score2 + score3 + priority
 * 
 * Output:Tổng số điểm
 * 
 */


function caclScoreArea(area) {
    if(area === "A") {
        return 2;
    }
    if(area === "B") {
        return 1;
    }
    if(area === "C") {
        return 0.5;
    } 
    return "Không hợp lệ"
    
}


function caclScoreObject(subject) {
    if(subject === 1) {
        return 2.5;
    }
    if(subject === 2) {
        return 1.5;
    }
    if(subject === 3) {
        return 1;
    } 
    return "Không hợp lệ"

}



function totalScore () {
    var score1,score2,score3,subject,area ,priority;
    var standardScore = 23;
    // score1 = 9;

    // score2 = 7;
    // score3 = 8;
    // subject = 3;

    // area = "A";

    var scoreArea = caclScoreArea(area);
    var scoreSubject = caclScoreObject(subject);
    // Điểm ưu tiên
    priority = scoreArea + scoreSubject;
    // Tổng điểm
    totalScore = score1 + score2 + score3 + priority;


    if (totalScore > standardScore) {
        console.log("Đậu", totalScore)
    } else {
        console.log("Rớt", totalScore)

    }



}

totalScore();

// Example 2
/**Input: Tên, số kw
 * 
 * 
 * Process : Tạo biến name , Kw , totalPrice
 * 
 *          Tạo function caclPrice
 *          totalPrice = Kw * price
 *          
 *          
 * 
 * 
 * Output: Tính tổng số tiền điện
 * 
 */


function caclPrice() {
    var name = "Trần Sinh"
    var Kw = 100;
    var totalPrice;

    if (Kw < 0 ) {
        console.log("Không hợp lệ")
    } else if (Kw <= 50) {
        totalPrice = Kw  * 500;
        console.log("Số tiền điện của " + name + " : ", totalPrice , "d"  )
    } else if (Kw <= 100) {
        totalPrice = 500 * 50 + (Kw-50)*650; 
        console.log("Số tiền điện của " + name + " : ", totalPrice , "d"  )
        
    }  else if (Kw <= 200) {
        totalPrice = 500 * 50 + 50 * 650 + (Kw-100)*850; 
        console.log("Số tiền điện của " + name + " : ", totalPrice , "d"  )

    }  else if (Kw <= 350) {
        totalPrice = 500 * 50 + 50 * 650 + 100 * 850  + (Kw-200)*1100; 
        console.log("Số tiền điện của " + name + " : ", totalPrice , "d"  )

    }  else if (Kw > 350 ) {
        totalPrice =  500 * 50 + 50 * 650 + 100 * 850 + 150 * 1100  + (Kw-350)*1300; 
        console.log("Số tiền điện của " + name + " : ", totalPrice , "d"  )

    } 

}

caclPrice()