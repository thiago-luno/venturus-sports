
import userInfo from '../mock/mock';

const endPoint = 'https://jsonplaceholder.typicode.com/';

const consumesApi = (param = '', method = 'GET', body) => {

    return fetch(`${endPoint}${param}`, {
                method,
                body
            })
            
            .then(res => res.json())
            .catch(err => console.log(err))
}

const ApiService = {
    getUser: () => consumesApi('users'),
    getUserPhoto: id => consumesApi(`photos?albumId=${id}`),
    getUserPost: id => consumesApi(`posts?userId=${id}`),
    getUserAlbum: id => consumesApi(`users/${id}/albums`),

    buildUser : () => {
        return  ApiService.getUser()
          .then(users =>
            Promise.all(
              users.map(user =>
                Promise.all([
                  user,
                  ApiService.getUserPhoto(user.id),
                  ApiService.getUserPost(user.id),
                  ApiService.getUserAlbum(user.id),
                ]).then(([user, photos, posts, albums]) => {
                    user['city'] = user.address.city;
                    user['rideInGroup'] = userInfo.rideGroup[Math.floor(Math.random() * userInfo.rideGroup.length)]
                    user['daysOfTheWeek'] = userInfo.week[Math.floor(Math.random() * userInfo.week.length)];
                    user['photos'] = photos.length.toString();
                    user['posts'] = posts.length.toString();
                    user['albums'] = albums.length.toString();
                    return user;
                })
              )
            )
          )
          .catch(err => {
            console.log(err);
          });
    }
  
}

export default ApiService;