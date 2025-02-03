$(window).on("scroll", function () {
    var realScroll = $(window).scrollTop(); // Obtém a posição de rolagem atual

    var headerSelector = $(".header-navbar-gradient"); // Seleciona o cabeçalho
    var navBrandSelectorImage = $(".navbar-brand > img.img-responsive"); // Seleciona a imagem
    var PopUpSelector = $("#HSystemSearchBox_Popup"); // Seleciona o popup

    if (realScroll >= 63) { // Verifica se a rolagem é maior ou igual a 63
        if (!headerSelector.hasClass("affix")) { // Verifica se o cabeçalho não tem a classe 'affix'
            headerSelector.addClass("affix"); // Adiciona a classe 'affix'
            navBrandSelectorImage.attr("src", "https://cdn-hweb.hsystem.com.br/5ee2ada1acb6943ae84b7fe3/6c0a2d9e9e774182a4784304e7884a09.png"); // Altera o src da imagem
        }
    } else if (realScroll == 0) { // Verifica se a rolagem é 0
        if (headerSelector.hasClass("affix")) { // Verifica se o cabeçalho tem a classe 'affix'
            headerSelector.removeClass("affix"); // Remove a classe 'affix'
            navBrandSelectorImage.attr("src", "https://cdn-hweb.hsystem.com.br/5ee2ada1acb6943ae84b7fe3/7b3ac09946d14e4e86bc30d8b652aad5.png"); // Altera o src da imagem
        }
    }

    if (realScroll >= 577) { // Verifica se a rolagem é maior ou igual a 577
        if (!PopUpSelector.hasClass("affix")) { // Verifica se o popup não tem a classe 'affix'
            PopUpSelector.addClass("affix"); // Adiciona a classe 'affix'
        }
    } else if (realScroll < 577) { // Verifica se a rolagem é menor que 577
        if (PopUpSelector.hasClass("affix")) { // Verifica se o popup tem a classe 'affix'
            PopUpSelector.addClass("closing"); // Adiciona a classe 'closing'
            setTimeout(function () { // Define um temporizador
                PopUpSelector.removeClass("affix"); // Remove a classe 'affix'
                PopUpSelector.removeClass("closing"); // Remove a classe 'closing'
            }, 100); // Após 100 milissegundos
        }
    }
});

