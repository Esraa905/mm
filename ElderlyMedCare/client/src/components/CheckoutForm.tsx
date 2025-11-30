import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

interface CheckoutFormProps {
  onComplete: (data: DeliveryData) => void;
  onBack: () => void;
}

interface DeliveryData {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  instructions: string;
}

export default function CheckoutForm({ onComplete, onBack }: CheckoutFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<DeliveryData>({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    instructions: "",
  });

  const updateField = (field: keyof DeliveryData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      onBack();
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName.trim().length > 0 && formData.phone.trim().length >= 10;
      case 2:
        return formData.address.trim().length > 0 && formData.city.trim().length > 0 && formData.zipCode.trim().length > 0;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const steps = [
    { number: 1, title: "Personal Details" },
    { number: 2, title: "Delivery Address" },
    { number: 3, title: "Confirm Order" },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                currentStep >= step.number
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {currentStep > step.number ? (
                <Check className="w-6 h-6" />
              ) : (
                step.number
              )}
            </div>
            <span
              className={`ml-3 text-lg hidden sm:block ${
                currentStep >= step.number
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {step.title}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`w-12 sm:w-24 h-1 mx-4 rounded ${
                  currentStep > step.number ? "bg-primary" : "bg-muted"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Step {currentStep} of 3: {steps[currentStep - 1].title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentStep === 1 && (
            <>
              <div className="space-y-3">
                <Label htmlFor="fullName" className="text-lg font-medium">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  className="h-14 text-xl"
                  data-testid="input-full-name"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-lg font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  className="h-14 text-xl"
                  data-testid="input-phone"
                />
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="space-y-3">
                <Label htmlFor="address" className="text-lg font-medium">
                  Street Address
                </Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => updateField("address", e.target.value)}
                  placeholder="Enter your full address"
                  className="min-h-24 text-xl"
                  data-testid="input-address"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="city" className="text-lg font-medium">
                    City
                  </Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    placeholder="Enter city"
                    className="h-14 text-xl"
                    data-testid="input-city"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="zipCode" className="text-lg font-medium">
                    ZIP Code
                  </Label>
                  <Input
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => updateField("zipCode", e.target.value)}
                    placeholder="Enter ZIP code"
                    className="h-14 text-xl"
                    data-testid="input-zip"
                  />
                </div>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <div className="space-y-3">
                <Label htmlFor="instructions" className="text-lg font-medium">
                  Delivery Instructions (Optional)
                </Label>
                <Textarea
                  id="instructions"
                  value={formData.instructions}
                  onChange={(e) => updateField("instructions", e.target.value)}
                  placeholder="Any special instructions for delivery..."
                  className="min-h-24 text-xl"
                  data-testid="input-instructions"
                />
              </div>
              <div className="bg-muted rounded-lg p-6 space-y-4">
                <h4 className="text-xl font-semibold">Delivery Details</h4>
                <div className="space-y-2 text-lg">
                  <p><strong>Name:</strong> {formData.fullName}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Address:</strong> {formData.address}</p>
                  <p><strong>City:</strong> {formData.city}, {formData.zipCode}</p>
                </div>
              </div>
            </>
          )}

          <div className="flex gap-4 pt-4">
            <Button
              variant="outline"
              className="h-14 px-8 text-xl flex-1"
              onClick={handleBack}
              data-testid="button-back"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            <Button
              className="h-14 px-8 text-xl flex-1"
              onClick={handleNext}
              disabled={!isStepValid()}
              data-testid="button-next"
            >
              {currentStep === 3 ? "Place Order" : "Continue"}
              {currentStep !== 3 && <ArrowRight className="w-5 h-5 ml-2" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
