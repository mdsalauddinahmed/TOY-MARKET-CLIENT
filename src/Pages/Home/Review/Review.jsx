import React from 'react';

const Review = () => {
   
    const reviews = [
        {
          id: 1,
          name: 'John Doe',
          review: 'I absolutely love the dolls I purchased from this shop. The quality is outstanding, and the attention to detail is remarkable. Highly recommended!',
          rating: 5
        },
        {
          id: 2,
          name: 'Jane Smith',
          review: 'Great selection of dolls and excellent customer service. The staff is knowledgeable and helpful. I m a satisfied customer!',
          rating: 4
        },
        {
          id: 3,
          name: 'Mike Johnson',
          review: 'This doll shop is a hidden gem! The variety of dolls is impressive, and the prices are reasonable. I m always thrilled with my purchases here.',
          rating: 4.5
        }
      ];

    return (
        <div className=" bg-indigo-800 py-12">
      <h2 className="text-center text-4xl font-bold pb-10  text-white mb-8">Customer Reviews</h2>
      <div className="max-w-3xl mx-auto">
        {reviews.map(review => (
          <div key={review.id} className="bg-white p-6 mb-6 shadow-md">
            <h3 className="text-lg font-bold mb-2">{review.name}</h3>
            <p className="mb-4">{review.review}</p>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">&#9733;</span>
              <span className="font-bold">{review.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Review;