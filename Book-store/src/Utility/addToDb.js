import { toast } from "react-toastify";

const getStoredReadList = () => {
    //read-List
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        //already exists. do not add it 
        console.log(id, 'already exist');
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        //ideally trigger from component
        toast('this book is added to your read list.')
    }
}

const getStoredWishList = () => {
    const wishListStr = localStorage.getItem('wish-list');
    if (wishListStr) {
        const storedList = JSON.parse(wishListStr);


        return storedList;
    }
    else {

        return [];
    }
}
const addToWishList = (id) => {
    const wishList = getStoredWishList();
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id, 'exist in readList');
        return;
    }
    if (wishList.includes(id)) {
        console.log(id, 'add to wish list');
    }
    else {
        wishList.push(id);
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem('wish-list', wishListStr);
        toast('this book is added to your wish list.')
    }



}


export { addToStoredReadList, addToWishList, getStoredReadList, getStoredWishList };


