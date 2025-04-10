
import Pricing from '@/components/home/Pricing';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  return (
    <div className="pt-8 md:pt-16">
      <div className="container mb-16">
        <Link to="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </Link>
      </div>
      <Pricing />
    </div>
  );
};

export default PricingPage;
