function IsChecked(){

    const InputChecked = document.getElementById("checkbox-toggle");
    let basicPrice = document.getElementById("basic-price");
    let proPrice = document.getElementById("pro-price");
    let masterPrice = document.getElementById("master-price");

    function ChangeToAnnually(){
      basicPrice.innerHTML = "199.99";
      proPrice.innerHTML = "249.99";
      masterPrice.innerHTML = "399.99";
    }

    function ChangeToMonthly(){
      basicPrice.innerHTML = "19.99";
      proPrice.innerHTML = "24.99";
      masterPrice.innerHTML = "39.99";
    }

    InputChecked.checked ? ChangeToAnnually() : ChangeToMonthly();
}