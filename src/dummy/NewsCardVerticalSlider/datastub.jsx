export const newsCardVerticalSliderData = [
    {
        agencyImageSrc: '//avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
        title: '0 Test title text very long long test title!long long test title!long long test title!',
        agency: 'Газета.Ru',
        time: 'вчера в 14:30',
        href: '/turbo?text=https%3A%2F%2Fmatchtv.ru%2Ffootball%2Fmatchtvnews_NI942914_Ilzat_Ahmetov_Khochetsa_dalshe_razvivatsa_i_poluchat_nagrady'
    },
    {
        agencyImageSrc: '//avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
        title: '1 Test title text very long long test title!',
        agency: 'Газета.Ru',
        time: 'вчера в 14:30',
        href: '/turbo?text=https%3A%2F%2Fmatchtv.ru%2Ffootball%2Fmatchtvnews_NI942914_Ilzat_Ahmetov_Khochetsa_dalshe_razvivatsa_i_poluchat_nagrady'
    },
    {
        agencyImageSrc: '//avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
        title: '2 Test title text very long long test title!',
        agency: 'Газета.Ru',
        time: 'вчера в 14:30',
        href: '/turbo?text=https%3A%2F%2Fmatchtv.ru%2Ffootball%2Fmatchtvnews_NI942914_Ilzat_Ahmetov_Khochetsa_dalshe_razvivatsa_i_poluchat_nagrady'
    },
    {
        agencyImageSrc: '//avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
        title: '3 Test title text very long long test title!long long test title!long long test title!',
        agency: 'Газета.Ru',
        time: 'вчера в 14:30',
        href: '/turbo?text=https%3A%2F%2Fmatchtv.ru%2Ffootball%2Fmatchtvnews_NI942914_Ilzat_Ahmetov_Khochetsa_dalshe_razvivatsa_i_poluchat_nagrady'
    },
    {
        agencyImageSrc: '//avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
        title: '4 Test title text very long long test title!long long test title!',
        agency: 'Газета.Ru',
        time: 'вчера в 14:30',
        href: '/turbo?text=https%3A%2F%2Fmatchtv.ru%2Ffootball%2Fmatchtvnews_NI942914_Ilzat_Ahmetov_Khochetsa_dalshe_razvivatsa_i_poluchat_nagrady'
    },
    {
        agencyImageSrc: '//avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
        title: '5 Test title',
        agency: 'Газета.Ru',
        time: 'вчера в 14:30',
        href: '/turbo?text=https%3A%2F%2Fmatchtv.ru%2Ffootball%2Fmatchtvnews_NI942914_Ilzat_Ahmetov_Khochetsa_dalshe_razvivatsa_i_poluchat_nagrady'
    },
    {
        agencyImageSrc: '//avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
        title: '6 Test title text very long long test title!',
        agency: 'Газета.Ru',
        time: 'вчера в 14:30',
        href: '/turbo?text=https%3A%2F%2Fmatchtv.ru%2Ffootball%2Fmatchtvnews_NI942914_Ilzat_Ahmetov_Khochetsa_dalshe_razvivatsa_i_poluchat_nagrady'
    },
    {
        agencyImageSrc: '//avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
        title: '7 Test!',
        agency: 'Газета.Ru',
        time: 'вчера в 14:30',
        href: '/turbo?text=https%3A%2F%2Fmatchtv.ru%2Ffootball%2Fmatchtvnews_NI942914_Ilzat_Ahmetov_Khochetsa_dalshe_razvivatsa_i_poluchat_nagrady'
    },
    {
        agencyImageSrc: '//avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
        title: '8 Test title text very long long test title!',
        agency: 'Газета.Ru',
        time: 'вчера в 14:30',
        href: '/turbo?text=https%3A%2F%2Fmatchtv.ru%2Ffootball%2Fmatchtvnews_NI942914_Ilzat_Ahmetov_Khochetsa_dalshe_razvivatsa_i_poluchat_nagrady'
    },
    {
        agencyImageSrc: '//avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
        title: '9 Test title text very long long test title!long long test title!long long test title!long long test title!',
        agency: 'Газета.Ru',
        time: 'вчера в 14:30',
        href: '/turbo?text=https%3A%2F%2Fmatchtv.ru%2Ffootball%2Fmatchtvnews_NI942914_Ilzat_Ahmetov_Khochetsa_dalshe_razvivatsa_i_poluchat_nagrady'
    }].map((item) => ({
        ...item,
        // Проверка href на турбо
        isTurbo: /\/turbo\?/.test(item.href)
    }));
