/**
 * Created by julia on 14-8-9.
 */
/**
 * Created by julia on 14-8-8.
 */
//1美元兑换美分
function Exchange(){
    //1美元兑换  1美元=100美分
    var one_cent=0, five_cents=0, ten_cents=0, twenty_five_cents=0, fifty_cents=0;
    var total=0;
    var couter = 0;
    for(one_cent=0;one_cent<=100;one_cent=one_cent+5)
    {
        for(five_cents=0;five_cents<=20;five_cents++)
        {
            if(one_cent+five_cents*5>100)
            {
                break;
            }
            for(ten_cents=0;ten_cents<=10;ten_cents++)
            {
                if(one_cent+five_cents*5+ten_cents*10>100)
                {
                    break;
                }
                for(twenty_five_cents=0;twenty_five_cents<=4;twenty_five_cents++)
                {
                    if(one_cent+five_cents*5+ten_cents*10+twenty_five_cents*25>100)
                    {
                        break;
                    }
                    for(fifty_cents=0;fifty_cents<=2;fifty_cents++)
                    {
                        couter++;
                        if(one_cent+five_cents*5+ten_cents*10+twenty_five_cents*25+fifty_cents*50>100)
                        {
                            break;
                        }
                        if(one_cent+five_cents*5+ten_cents*10+twenty_five_cents*25+fifty_cents*50==100)
                        {
                            total=total+1;
                        }
                    }
                }
            }
        }
    }
    console.log("couter="+couter+"total="+total);
}

//递归练习
//n的阶乘
function factorial(number) {
    var result;
    if(number==0){
        result = 1;
    }
    if(number>0){
        result = factorial(number-1);
        result = number*result;
    }
    return result;
}
//console.log(factorial(5));

//汉诺塔
function hanoi_tower(disk,from,mid,to){
    var counter=0;
    if(disk==1){
        counter=1;
        console.log("disk "+disk+" from "+from+ " to "+to);
    }
    else{
        counter=counter+hanoi_tower(disk-1,from,to,mid);
        counter++;
        console.log("disk "+disk+" from "+from+ " to "+to);
        counter = counter+hanoi_tower(disk-1,mid,from,to);
    }
    return counter;
}
console.log("共移动"+hanoi_tower(2,"A","B","C")+"次");