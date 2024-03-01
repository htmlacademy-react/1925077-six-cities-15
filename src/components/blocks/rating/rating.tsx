type RatingProps = {
  bemBlock: 'place-card' | 'offer' | 'reviews';
  rating: number;
}

export function Rating({bemBlock, rating}: RatingProps) {
  return (
    <div className={`${bemBlock}__rating rating`}>
      <div className={`${bemBlock}__stars rating__stars`}>
        <span style={{width: `${rating * 20}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
