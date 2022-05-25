import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {

    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://driller-tools.herokuapp.com/reviews',)
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-16'>User Reviews ({reviews.length})</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 my-6 gap-5 lg:gap-0'>
                {reviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                ></ReviewCard>)}
            </div>
        </div>
    );
};

export default Reviews;