//Email Domain Analyzer
function AnalyzeEmailDomains(text){
    const splitText = text.split(' ');
    let emails = [];
    let domain ;
    let longestDomain = -Infinity;
    let part;
    for(const i of splitText){
        if(i.includes('@')){
            emails.push(i);
            part = emails.split('@');
            domain = part[1];
            if(domain.length>longestDomain){
                longestDomain = domain;
            }
        }else{
            continue;
        }
    }
    const email = {
        'Email Count': emails.length,
        'Longest Domain': longestDomain,
    }
    return email;
    
}
const t = "Contact support@gmail.com admin@yahoo.com info@programminghero.com";
console.log(AnalyzeEmailDomains(t));