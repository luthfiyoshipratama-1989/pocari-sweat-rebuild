"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Droplet, ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

const MIN_WEIGHT_KG = 20;
const MAX_WEIGHT_KG = 250;

type FormData = {
  weight: number;
  activity: "sedentary" | "light" | "moderate" | "active" | "very-active";
  weather: "cool" | "normal" | "hot";
};

const activityOptions = [
  { value: "sedentary", label: "Jarang olahraga", desc: "Kerja kantor / banyak duduk", factor: 1.0 },
  { value: "light", label: "Olahraga ringan", desc: "1-2x seminggu", factor: 1.1 },
  { value: "moderate", label: "Cukup aktif", desc: "3-4x seminggu", factor: 1.2 },
  { value: "active", label: "Aktif", desc: "5-6x seminggu", factor: 1.3 },
  { value: "very-active", label: "Sangat aktif", desc: "Setiap hari / atlet", factor: 1.4 },
] as const;

const weatherOptions = [
  { value: "cool", label: "Dingin", desc: "< 22°C", factor: 0.9 },
  { value: "normal", label: "Normal", desc: "22-30°C", factor: 1.0 },
  { value: "hot", label: "Panas", desc: "> 30°C", factor: 1.2 },
] as const;

export function HydrationCalculator() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>({
    weight: 0,
    activity: "moderate",
    weather: "normal",
  });

  const isWeightValid =
    Number.isFinite(form.weight) &&
    form.weight >= MIN_WEIGHT_KG &&
    form.weight <= MAX_WEIGHT_KG;
  const showWeightError = form.weight !== 0 && !isWeightValid;

  const calculateResult = () => {
    // Tolak input di luar rentang wajar; jangan pernah menghitung dari NaN/0.
    const safeWeight = isWeightValid ? form.weight : 0;
    // Base: 35 ml per kg berat badan
    const base = safeWeight * 35;
    const activityFactor = activityOptions.find((a) => a.value === form.activity)?.factor || 1;
    const weatherFactor = weatherOptions.find((w) => w.value === form.weather)?.factor || 1;
    const total = Math.round((base * activityFactor * weatherFactor) / 100) * 100;
    const liters = (total / 1000).toFixed(1);
    const bottles = Math.ceil(total / 500);
    return { total, liters, bottles };
  };

  const reset = () => {
    setStep(1);
    setForm({ weight: 0, activity: "moderate", weather: "normal" });
  };

  return (
    <div className="bg-background rounded-2xl border border-border p-8 md:p-12">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={`h-1 flex-1 rounded-full transition-colors ${
              step >= n ? "bg-marine" : "bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <p className="text-sm text-marine font-medium mb-2">Langkah 1 dari 3</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
              Beritahu kami tentang dirimu
            </h2>
            <p className="text-muted-foreground">
              Data ini untuk menghitung kebutuhan cairan harianmu.
            </p>
          </div>

          <div className="max-w-sm">
            <label htmlFor="berat" className="text-sm font-medium mb-2 block">
              Berat (kg)
            </label>
            <Input
              id="berat"
              type="number"
              inputMode="numeric"
              min={MIN_WEIGHT_KG}
              max={MAX_WEIGHT_KG}
              step={1}
              placeholder="65"
              aria-invalid={showWeightError}
              aria-describedby={showWeightError ? "berat-error" : undefined}
              value={form.weight || ""}
              onChange={(e) =>
                setForm({
                  ...form,
                  weight:
                    e.target.value === "" ? 0 : Number(e.target.value),
                })
              }
            />
            {showWeightError && (
              <p
                id="berat-error"
                role="alert"
                className="mt-2 text-sm text-destructive"
              >
                Berat harus antara {MIN_WEIGHT_KG} dan {MAX_WEIGHT_KG} kg.
              </p>
            )}
            <p className="mt-2 text-xs text-muted-foreground">
              Rumus ini untuk usia 18+ dengan berat {MIN_WEIGHT_KG}–{MAX_WEIGHT_KG} kg.
            </p>
          </div>

          <div className="flex justify-end pt-4">
            <Button
              onClick={() => isWeightValid && setStep(2)}
              disabled={!isWeightValid}
              className="bg-marine hover:bg-marine-dark text-white"
            >
              Lanjut <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <p className="text-sm text-marine font-medium mb-2">Langkah 2 dari 3</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
              Seberapa aktif kamu?
            </h2>
            <p className="text-muted-foreground">
              Level aktivitas mempengaruhi kebutuhan cairanmu.
            </p>
          </div>

          <div className="space-y-2">
            {activityOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setForm({ ...form, activity: opt.value })}
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  form.activity === opt.value
                    ? "border-marine bg-marine/5"
                    : "border-border hover:border-marine/50"
                }`}
              >
                <div className="font-medium">{opt.label}</div>
                <div className="text-sm text-muted-foreground">{opt.desc}</div>
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={() => setStep(1)}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Kembali
            </Button>
            <Button
              onClick={() => setStep(3)}
              className="bg-marine hover:bg-marine-dark text-white"
            >
              Lanjut <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <p className="text-sm text-marine font-medium mb-2">Langkah 3 dari 3</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
              Cuaca di sekitarmu?
            </h2>
            <p className="text-muted-foreground">
              Suhu panas bikin tubuh lebih cepat kehilangan cairan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {weatherOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setForm({ ...form, weather: opt.value })}
                className={`text-left p-4 rounded-lg border transition-colors ${
                  form.weather === opt.value
                    ? "border-marine bg-marine/5"
                    : "border-border hover:border-marine/50"
                }`}
              >
                <div className="font-medium">{opt.label}</div>
                <div className="text-sm text-muted-foreground">{opt.desc}</div>
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={() => setStep(2)}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Kembali
            </Button>
            <Button
              onClick={() => setStep(4)}
              className="bg-marine hover:bg-marine-dark text-white"
            >
              Lihat Hasil <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 4 - Result */}
      {step === 4 && (
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-sm text-marine font-medium mb-2">Hasil Perhitungan</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Kebutuhan Cairan Harianmu
            </h2>
          </div>

          {(() => {
            const result = calculateResult();
            return (
              <>
                <div className="bg-marine/5 border border-marine/20 rounded-2xl p-8 text-center">
                  <Droplet className="w-12 h-12 text-marine mx-auto mb-4" />
                  <div className="text-5xl md:text-6xl font-semibold text-marine mb-2">
                    {result.liters}
                    <span className="text-2xl md:text-3xl text-muted-foreground ml-2">L / hari</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Setara dengan <span className="font-semibold text-foreground">{result.bottles} botol 500 ml cairan</span>
                  </p>
                  <div className="text-sm text-muted-foreground max-w-md mx-auto">
                    Kebutuhan cairanmu dihitung berdasarkan berat badan, level aktivitas, dan cuaca di sekitarmu.
                  </div>
                </div>

                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="font-medium mb-3">💡 Tips Hidrasi</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Minum segelas air setiap bangun tidur</li>
                    <li>• Minum Pocari Sweat setelah berkeringat untuk ganti ion tubuh</li>
                    <li>• Jangan tunggu haus untuk minum</li>
                    <li>• Sesuaikan konsumsi saat olahraga berat</li>
                  </ul>
                </div>

                <div className="flex justify-center gap-3 pt-4">
                  <Button variant="outline" onClick={reset}>
                    <RotateCcw className="w-4 h-4 mr-2" /> Hitung Ulang
                  </Button>
                  <Button
                    asChild
                    className="bg-marine hover:bg-marine-dark text-white"
                  >
                    <a href="https://pocarisweat.id" target="_blank" rel="noopener">
                      Beli Pocari Sweat
                    </a>
                  </Button>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}