
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


    //---- Card Sales -----

    $("#cardStock").click(function(){
    
      $("#PageLoadHere").load("CARD-SALES/card-stock.html");
      
    });


    $("#cardHistory").click(function(){
    
      $("#PageLoadHere").load("CARD-SALES/card-history.html");
      
    });




    //---- End Card Sales -----


    //---- Start POS -----

    $("#posbtn").click(function(){
    
      $("#PageLoadHere").load("POS/Pos-page.html");
      
    });


    //---- End POS -----



    //---- Start Users  -----


    $("#createUserAccount").click(function(){
    
      $("#PageLoadHere").load("USERS/create-user-account.html");
      
    });

    
    $("#UploadBulkUsers").click(function(){
    
      $("#PageLoadHere").load("USERS/upload-bulk-users.html");
      
    });




    //---- End Users -----

     //----Start Payments -----

     $("#uploadBulkPayments").click(function(){
    
      $("#PageLoadHere").load("PAYMENTS/Upload-Bulk-Payment.html");
      
    });



     //----End Payments -----


     //----Start Maxicash Card -----

     $("#cardApproval").click(function(){
    
      $("#PageLoadHere").load("MAXICASH-CARD/Card-Approval.html");
      
    });


    $("#cardTopUpApproval").click(function(){
    
      $("#PageLoadHere").load("MAXICASH-CARD/Card-Top-Up-Approval.html");
      
    });


     //----End Maxicash Card -----










    


    

  


});