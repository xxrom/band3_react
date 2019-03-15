specs({
    feature: 'Карта вертикального слайдера c доскролом в Новостях (news-card-vertical-slider)'
}, () => {
    it('Внешний вид вертикального слайдера Новостей', function() {
        return this.browser
            .url('/turbo?stub=newscardverticalslider/default.json')
            .yaWaitForVisible(PO.blocks.newsCardVerticalSlider(), 'Страница не загрузилась')
            .assertView('plain', PO.blocks.newsCardVerticalSlider());
    });
});
