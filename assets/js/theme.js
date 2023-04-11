
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



    //-- POS --
    $("#Device").click(function(){
    
      $("#PageLoadHere").load("POS/Devices-Page.html");
      
    });
  //--End POS --


    //--Agents--
    $("#AgentCard").click(function(){
    
      $("#PageLoadHere").load("AGENTS/AgentCard.html");
      
    });
    $("#AgentList").click(function(){
      
      $("#PageLoadHere").load("AGENTS/AgentList.html");
      
    });
    $("#CardReload").click(function(){
      
      $("#PageLoadHere").load("AGENTS/CardReloads.html");
      
    });
    $("#CardSales").click(function(){
      
      $("#PageLoadHere").load("AGENTS/CardSales.html");
      
    });
    $("#CardWithdrawals").click(function(){
      
      $("#PageLoadHere").load("AGENTS/CardWithdrawals.html");
      
    });
    $("#CashPickUp").click(function(){
      
      $("#PageLoadHere").load("AGENTS/CashPickUp.html");
      
    });
    $("#MaxiTrasnfer").click(function(){
      
      $("#PageLoadHere").load("AGENTS/MaxiCashMe-Tranfers.html");
      
    });
    //--End Agents --