<template>
    <div>
        <search 
            class="movieSearch"
            @onSearch="handleSearchMovie"
        />
        <list-view
            class="movieList"
            :listItem="moveList"
        />
    </div>
</template>

<script>

import Search from './CommonSet/Search';
import ListView from './CommonSet/ListView';
import axios from 'axios';

export default {
    name: 'movie-list',
    data() {
        return {
            text: 'Welcome to Your Vue.js App',
            apiKey: 'ef78de06fb48b09e01f501a30fd4ba9b',
            moveList: [],
        };
    },
    methods: {
        handleSearchMovie(query) {
            $.ajax({
                type:'GET',
                dataType: 'jsonp',
                url: `https://apis.daum.net/contents/movie?apikey=${this.apiKey}&q=${query}&output=json`,
            }).done((data)=> {
                this.moveList = data.channel.item;
            }).fail(()=> {
                this.moveList = []; 
            });

            return;
            // 서버 구성 후 사용.
            const config = {
                method: 'get',
                url: `https://apis.daum.net/contents/movie?apikey=${this.apiKey}&q=${query}&output=json`,
                responseType: 'json',
                withCredentials: true,
            }

            axios.request(config)
            .then((response)=> {
                console.log(response);
                this.moveList = response.data.channel.item;
            })
            .catch((error)=> {
                console.log(error);
                this.moveList = [{"genre":[{"content":"드라마","link":""}],"res":[{"content":"","link":""}],"trailer":[{"content":"","link":""}],"photo1":{"content":"http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Fcfile76.uf.daum.net%2Fimage%2F235ED149544A7F043B79A0","link":"http://movie.daum.net/moviedb/photoviewer?id=89763#986705"},"actor":[{"content":"엘레나 안","link":"http://movie.daum.net/person/main?personId=395951"},{"content":"다닐라 라소마킨","link":"http://movie.daum.net/person/main?personId=395952"},{"content":"카림 파카차코프","link":"http://movie.daum.net/person/main?personId=395953"}],"story":[{"content":"러시아의 광활한 초원에 아버지와 딸이 산다. 태고 적부터 이어져 내려오는 이곳의 틀에 박힌 일상을 바꿀 수 있는 것은 아무것도 없지만 그래도 항상 내일은 있다. 매일 아침 아버지는 일하러 나가고 딸 디나라는 집에서 혼자있다. 그녀가 하는 일은 두가지다 - 기다림과 자신의 감정을 들여다 보는 일. 두 남자가 디나라를 사랑한다. 그녀는 두 남자 모두를 사랑한다. 하지만 사랑은 나누어 가질 수 없는 것.\r\n막심 스미노프는 모스크바를 떠나 영화 촬영 보조기사로 세미팔라틴스크초원지대에 온다. 이 촬영팀의 임무는 철저히 베일에 가려져 있다. 바로 이곳 카자흐에서 막심은 그의 첫사랑 소녀 디나라를 만난다. 두 젊은이는 자신들은 물론 인류 역사에 광풍으로 불어닥칠 사건의 중심에 자신들이 서있다는 것을 알지 못한다. 바로 이 세미팔라틴스크초원에서 그해 여름 러시아 역사에서 최초로 원자폭탄 실험이 이루어진다. \r\n이 영화는 1949년 세미팔라틴스크에서 행해진 원자폭탄 실험에 관한 것이다. 당시는 실험결과 예측도 정밀하지 못했을뿐 아니라 아무도 방사능이 무엇인지에 대한 정확한 지식도 없던 때였기 때문에 그 누구도 이 실험이 가져올 결과를 예상할 수 없었다. 결국 폭탄 테스트는 인간 테스트가 되었고…\r\n감독 꼬트가 전하고자 하는 내용은 바로 이것이다 –“초원엔 사람들이 산다. 평범한 삶이다. 대대로 내려온 이들의 삶을 바꿀 수 있는 것은 아무것도 없었다. 자연의 일부인 이들에게 매일 똑같은 일상이 이어진다. 일하고 사랑에 빠지고…그렇게 살아간다. 하지만 어느 날 생각지도 않았던 어마어마한 사건이 코앞에서 일어났다. 핵폭탄이 폭발하는 모습은 무척 아름답다. 몸서리쳐지게 아름답다. 그것은 땅속에서부터 자라나 결국 구름을 끌어내려 갈가리 찢어발기는 불의 괴물이다.”\r\n(2015년 제15회 광주국제영화제)","link":"http://movie.daum.net/moviedb/main?movieId=89763"}],"write_grades":[{"content":"","link":"http://movie.daum.net/moviedetailNetizenPoint.do?movieId=89763"}],"title":[{"content":"테스트","link":"http://movie.daum.net/moviedb/main?movieId=89763"}],"audience_date":[{"content":"","link":""}],"video_info":[{"content":"","link":""}],"event":[{"content":"","link":""}],"more_actor":[{"content":"","link":"http://movie.daum.net/moviedb/crew?movieId=89763"}],"photo_info":[{"content":"10","link":"http://movie.daum.net/moviedb/photoviewer?id=89763#start/PhotoList"}],"year":[{"content":"2014","link":""}],"ogr_title":[{"content":"Ispytanie","link":""}],"video":[{"content":"","link":""}],"kword":[{"content":"","link":""}],"open_info":[{"content":"","link":""},{"content":"","link":""},{"content":"96분","link":""},{"content":"","link":""}],"audience":[{"content":"","link":""}],"director":[{"content":"알렉산더 코트","link":"http://movie.daum.net/person/main?personId=150929"}],"nation":[{"content":"러시아","link":""}],"homepage":[{"content":"","link":""}],"category":[{"content":"일반","link":""}],"thumbnail":[{"content":"http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Fcfile17.uf.daum.net%2Fimage%2F226B294B544A7EEB219DD7","link":""}],"eng_title":[{"content":"Test","link":""}],"grade3":[{"content":"","link":""}],"photo2":{"content":"http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Fcfile117.uf.daum.net%2Fimage%2F215ED149544A7F04393B1A","link":"http://movie.daum.net/moviedb/photoviewer?id=89763#986703"},"grades":[{"content":"","link":"http://movie.daum.net/moviedb/grade?movieId=89763&type=netizen"},{"content":"0","link":""}],"expect_grades":[{"content":"","link":"http://movie.daum.net/moviedetailNetizenPoint.do?movieId=89763&type=before"},{"content":"0","link":""}],"photo3":{"content":"http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Fcfile119.uf.daum.net%2Fimage%2F225ED149544A7F043A703B","link":"http://movie.daum.net/moviedb/photoviewer?id=89763#986704"},"photo4":{"content":"http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ff0da425fdef5a2da3606c359c5b780a33627850e","link":"http://movie.daum.net/moviedb/photoviewer?id=89763#1027946"},"grade1":[{"content":"","link":""}],"wiki_url":[{"content":"","link":""}],"photo5":{"content":"http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5217719861e3d3152da1b1dc755ff8e8ffd5990d","link":"http://movie.daum.net/moviedb/photoviewer?id=89763#1027947"},"grade2":[{"content":"","link":""}]},{"genre":[{"content":"드라마","link":""}],"res":[{"content":"","link":""}],"trailer":[{"content":"","link":""}],"photo1":{"content":"http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Fcfile117.uf.daum.net%2Fimage%2F2746E24952E7A2671D1396","link":"http://movie.daum.net/moviedb/photoviewer?id=79534#931921"},"actor":[{"content":"매튜 리시","link":"http://movie.daum.net/person/main?personId=326720"},{"content":"크리스토퍼 쿠식","link":"http://movie.daum.net/person/main?personId=353190"},{"content":"데이먼 K. 스퍼버","link":"http://movie.daum.net/person/main?personId=323137"},{"content":"스캇 말로","link":"http://movie.daum.net/person/main?personId=353191"}],"story":[{"content":"","link":""}],"write_grades":[{"content":"","link":"http://movie.daum.net/moviedetailNetizenPoint.do?movieId=79534"}],"title":[{"content":"테스트","link":"http://movie.daum.net/moviedb/main?movieId=79534"}],"audience_date":[{"content":"","link":""}],"video_info":[{"content":"","link":""}],"event":[{"content":"","link":""}],"more_actor":[{"content":"","link":"http://movie.daum.net/moviedb/crew?movieId=79534"}],"photo_info":[{"content":"2","link":"http://movie.daum.net/moviedb/photoviewer?id=79534#start/PhotoList"}],"year":[{"content":"2013","link":""}],"ogr_title":[{"content":"","link":""}],"video":[{"content":"","link":""}],"kword":[{"content":"","link":""}],"open_info":[{"content":"","link":""},{"content":"","link":""},{"content":"90분","link":""},{"content":"","link":""}],"audience":[{"content":"","link":""}],"director":[{"content":"크리스 메이슨 존슨","link":"http://movie.daum.net/person/main?personId=159176"}],"nation":[{"content":"미국","link":""}],"homepage":[{"content":"","link":""}],"category":[{"content":"일반","link":""}],"thumbnail":[{"content":"http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Fcfile119.uf.daum.net%2Fimage%2F233B713A51A6157A2A506B","link":""}],"eng_title":[{"content":"Test","link":""}],"grade3":[{"content":"","link":""}],"photo2":{"content":"http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Fcfile118.uf.daum.net%2Fimage%2F2426B03751A61514206B43","link":"http://movie.daum.net/moviedb/photoviewer?id=79534#877082"},"grades":[{"content":"","link":"http://movie.daum.net/moviedb/grade?movieId=79534&type=netizen"},{"content":"0","link":""}],"expect_grades":[{"content":"","link":"http://movie.daum.net/moviedetailNetizenPoint.do?movieId=79534&type=before"},{"content":"0","link":""}],"photo3":{"content":"","link":""},"photo4":{"content":"","link":""},"grade1":[{"content":"","link":""}],"wiki_url":[{"content":"","link":""}],"photo5":{"content":"","link":""},"grade2":[{"content":"","link":""}]},{"genre":[{"content":"애니메이션","link":""}],"res":[{"content":"","link":""}],"trailer":[{"content":"","link":""}],"photo1":{"content":"http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Fcfile118.uf.daum.net%2Fimage%2F18634A474E780A14240D9D","link":"http://movie.daum.net/moviedb/photoviewer?id=35371#723210"},"actor":[{"content":"토마스 하나크","link":"http://movie.daum.net/person/main?personId=114347"}],"story":[{"content":"자동차 사고를 당해 폐차장으로 들어선 운전사. 그는 갑자기 그곳에서 '터미네이터'를 연상시키는 테스트용 마네킹들에게 습격을 받는다. 실사와 애니메이션이 결합된 작품으로, 인간성이 상실된 사회의 분위기를 우울하고도 스산하게 그리고 있는 SF.","link":"http://movie.daum.net/moviedb/main?movieId=35371"}],"write_grades":[{"content":"","link":"http://movie.daum.net/moviedetailNetizenPoint.do?movieId=35371"}],"title":[{"content":"테스트","link":"http://movie.daum.net/moviedb/main?movieId=35371"}],"audience_date":[{"content":"","link":""}],"video_info":[{"content":"","link":""}],"event":[{"content":"","link":""}],"more_actor":[{"content":"","link":"http://movie.daum.net/moviedb/crew?movieId=35371"}],"photo_info":[{"content":"4","link":"http://movie.daum.net/moviedb/photoviewer?id=35371#start/PhotoList"}],"year":[{"content":"1999","link":""}],"ogr_title":[{"content":"","link":""}],"video":[{"content":"","link":""}],"kword":[{"content":"","link":""}],"open_info":[{"content":"","link":""},{"content":"","link":""},{"content":"7분","link":""},{"content":"","link":""}],"audience":[{"content":"","link":""}],"director":[{"content":"바츨라프 스반크바예르","link":"http://movie.daum.net/person/main?personId=256592"}],"nation":[{"content":"체코","link":""}],"homepage":[{"content":"","link":""}],"category":[{"content":"단편","link":""}],"thumbnail":[{"content":"http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Fcfile116.uf.daum.net%2Fimage%2F20634A474E780A1426C4D3","link":""}],"eng_title":[{"content":"Test","link":""}],"grade3":[{"content":"","link":""}],"photo2":{"content":"http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Fcfile77.uf.daum.net%2Fimage%2F19634A474E780A1425A902","link":"http://movie.daum.net/moviedb/photoviewer?id=35371#723211"},"grades":[{"content":"","link":"http://movie.daum.net/moviedb/grade?movieId=35371&type=netizen"},{"content":"0","link":""}],"expect_grades":[{"content":"","link":"http://movie.daum.net/moviedetailNetizenPoint.do?movieId=35371&type=before"},{"content":"0","link":""}],"photo3":{"content":"http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Fcfile117.uf.daum.net%2Fimage%2F12634A474E780A15273EA8","link":"http://movie.daum.net/moviedb/photoviewer?id=35371#723213"},"photo4":{"content":"http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Fcfile77.uf.daum.net%2Fimage%2F13634A474E780A15284629","link":"http://movie.daum.net/moviedb/photoviewer?id=35371#723214"},"grade1":[{"content":"","link":""}],"wiki_url":[{"content":"","link":""}],"photo5":{"content":"","link":""},"grade2":[{"content":"","link":""}]}];

            });
        },
    },
    components: {
        Search,
        ListView,
    },
};
</script>

<style lang='scss' scoped>
    .movieSearch {
        margin: 30px 40px;
    }

    .movieList {
        margin: 10px 50px;
    }

</style>