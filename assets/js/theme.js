
$(function(){
  'use strict'

  $('#calendarSidebarShow').on('click', function(e){
    e.preventDefault()
    $('body').toggleClass('calendar-sidebar-show');

    $(this).addClass('d-none');
    $('#mainMenuOpen').removeClass('d-none');
  })

  $(document).on('click touchstart', function(e){
    e.stopPropagation();

    // closing of sidebar menu when clicking outside of it
    if(!$(e.target).closest('.burger-menu').length) {
      var sb = $(e.target).closest('.calendar-sidebar').length;
      if(!sb) {
        $('body').removeClass('calendar-sidebar-show');

        $('#mainMenuOpen').addClass('d-none');
        $('#calendarSidebarShow').removeClass('d-none');
      }
    }
  });

  window.darkMode = function(){
    $('.btn-white').addClass('btn-dark').removeClass('btn-white');
  }

  window.lightMode = function() {
    $('.btn-dark').addClass('btn-white').removeClass('btn-dark');
  }

  var hasMode = Cookies.get('df-mode');
  if(hasMode === 'dark') {
    darkMode();
  } else {
    lightMode();
  }

})



$(document).ready(function(){

  $("#load").click(function(){
    
    alert("ddd")
    $("#addOn").load("C-Page.html");

  });


});




// Loading Pages

$(document).ready(function(){

  $("#PageLoadHere").load("dashboard.html");


  $("#HomeBtn").click(function(){
    
    $("#PageLoadHere").load("dashboard.html");

  });


  //---- Start GTP ----
  
  $("#cardbalance").click(function(){
    
    $("#PageLoadHere").load("GTP/gtp-card-balance.html");
    
  });

  $("#CardCustomer").click(function(){
    
    $("#PageLoadHere").load("GTP/gtp-card-customer.html");
    
  });

  $("#cardhistory").click(function(){
    
    $("#PageLoadHere").load("GTP/gtp-card-history.html");
    
  });

  $("#cardReversal").click(function(){
    
    $("#PageLoadHere").load("GTP/gtp-card-reversal.html");
    
  });

  $("#cardtocard").click(function(){
    
    $("#PageLoadHere").load("GTP/gtp-card-to-card.html");
    
  });


  $("#cardReload").click(function(){
    
    $("#PageLoadHere").load("GTP/gtp-card-reload.html");
    
  });
  //---- End GTP -----

  //--Transactions--
  $("#KYC").click(function(){
    
    $("#PageLoadHere").load("TRANSACTIONS/KYC-Page.html");
    
  });
  $("#MobilePayment").click(function(){
    
    $("#PageLoadHere").load("TRANSACTIONS/MobilePayment-Page.html");
    
  });
  $("#BankPayment").click(function(){
    
    $("#PageLoadHere").load("TRANSACTIONS/Bank-Page.html");
    
  });
  $("#MoneyPayment").click(function(){
    
    $("#PageLoadHere").load("TRANSACTIONS/MoneyPayment-Page.html");
    
  }); $("#GatewayPayment").click(function(){
    
    $("#PageLoadHere").load("TRANSACTIONS/Gateway-Page.html");
    
  });
  $("#CardPayment").click(function(){
    
    $("#PageLoadHere").load("TRANSACTIONS/Card-Page.html");
    
  });
  $("#VoucherOrders").click(function(){
    
    $("#PageLoadHere").load("TRANSACTIONS/Voucher-Page.html");
    
  });
  $("#Rate").click(function(){
    
    $("#PageLoadHere").load("TRANSACTIONS/Rate-Page.html");
    
  });
  $("#Registration").click(function(){
    
    $("#PageLoadHere").load("TRANSACTIONS/Registration-Page.html");
    
  }); $("#OTP").click(function(){
    
    $("#PageLoadHere").load("TRANSACTIONS/OTP-Page.html");
    
  });
  //--End Transactions--

<<<<<<< HEAD
  //--MaxiCash--
}); $("#Transaction").click(function(){
    
  $("#PageLoadHere").load("MAXICASH-ME/Transaction-Page.html");
  
});

 $("#Thunes").click(function(){
    
  $("#PageLoadHere").load("MAXICASH-ME/Thunes-Page.html");
  
});

$("#MaxiCashMe").click(function(){
    
  $("#PageLoadHere").load("MAXICASH-ME/MaxiCashMe-Page.html");
  
});
 $("#Providers").click(function(){
    
  $("#PageLoadHere").load("MAXICASH-ME/Providers-Page.html");
  
});
  //--MaxiCash--

  //--Merchants--
  $("#TestAccount").click(function(){
    
    $("#PageLoadHere").load("MERCHANTS/CreateTestAccount.html");
    
  });
  $("#LiveTest").click(function(){
    
    $("#PageLoadHere").load("MERCHANTS/CreateLiveMerchant-Page.html");
    
  });
  $("#Billing").click(function(){
    
    $("#PageLoadHere").load("MERCHANTS/Billing-Page.html");
    
  });
  $("#Settings").click(function(){
    
    $("#PageLoadHere").load("MERCHANTS/Settings-Page.html");
    
  });
  $("#Refund").click(function(){
    
    $("#PageLoadHere").load("MERCHANTS/Refund-Page.html");
    
  });
  $("#Fee").click(function(){
    
    $("#PageLoadHere").load("MERCHANTS/Fee-Page.html");
    
  });
  $("#Settlements").click(function(){
    
    $("#PageLoadHere").load("MERCHANTS/Settlement-Page.html");
    
  });
  //--End Merchants --
=======


  //---- Start Management -----


  $("#userProfiles").click(function(){
    
    $("#PageLoadHere").load("MANAGEMENT/user-profiles.html");
    
  });

  $("#last50RegisteredUsers").click(function(){
    
    $("#PageLoadHere").load("MANAGEMENT/last-50-registerd-users.html");
    
  });


  $("#MaxiCashUserList").click(function(){
    
    $("#PageLoadHere").load("MANAGEMENT/maxicash-user-list.html");
    
  });

  
  $("#last50Transactions").click(function(){
    
    $("#PageLoadHere").load("MANAGEMENT/last-50-transaction.html");
    
  });

  $("#BirthdayList").click(function(){
    
    $("#PageLoadHere").load("MANAGEMENT/birthday-list.html");
    
  });

  $("#last50AirtimeSales").click(function(){
    
    $("#PageLoadHere").load("MANAGEMENT/last-50-airtime-sales.html");
    
  });


  //---- End Management -----





   //---- Start Cash Management -----



   $("#AccountType").click(function(){
    
    $("#PageLoadHere").load("CASH-MANAGEMENT/Account-types.html");
    
  });


  $("#Accounts").click(function(){
    
    $("#PageLoadHere").load("CASH-MANAGEMENT/Accounts.html");
    
  });


  $("#Service").click(function(){
    
    $("#PageLoadHere").load("CASH-MANAGEMENT/service.html");
    
  });



  $("#TransactionHistory").click(function(){
    
    $("#PageLoadHere").load("CASH-MANAGEMENT/transaction-history.html");
    
  });


  
  $("#EndOfDay").click(function(){
    
    $("#PageLoadHere").load("CASH-MANAGEMENT/end-of-day.html");
    
  });



  $("#AccountsBalances").click(function(){
    
    $("#PageLoadHere").load("CASH-MANAGEMENT/Account-balance.html");
    
  });






    //---- End Cash Management -----


  


});
>>>>>>> 9578ed576978a6df266497fa8a92c6bc68cb6ef6
