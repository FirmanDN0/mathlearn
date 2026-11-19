"use client";

import { useState } from "react";

function factorial(n: number): bigint {
  if (n < 0) return BigInt(0);
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
  return result;
}

function permutasi(n: number, r: number): bigint {
  // P(n,r) = n! / (n-r)!
  return factorial(n) / factorial(n - r);
}

function kombinasi(n: number, r: number): bigint {
  // C(n,r) = n! / (r! * (n-r)!)
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function permutasiSteps(n: number, r: number): string {
  // Show the product: n × (n-1) × ... × (n-r+1)
  if (r === 0) return "1";
  const terms: number[] = [];
  for (let i = n; i > n - r; i--) {
    terms.push(i);
  }
  return terms.join(" × ");
}

export default function PermutasiKombinasi() {
  const [nVal, setNVal] = useState<string>("");
  const [rVal, setRVal] = useState<string>("");

  const n = parseInt(nVal, 10);
  const r = parseInt(rVal, 10);

  const nEmpty = nVal === "";
  const rEmpty = rVal === "";
  const isEmpty = nEmpty || rEmpty;

  let error = "";
  if (!isEmpty) {
    if (!Number.isInteger(n) || !Number.isInteger(r)) {
      error = "n dan r harus bilangan bulat.";
    } else if (n < 0 || r < 0) {
      error = "n dan r harus bernilai ≥ 0.";
    } else if (r > n) {
      error = "r tidak boleh lebih besar dari n.";
    } else if (n > 20) {
      error = "n terlalu besar (maksimum 20 untuk menghindari overflow).";
    }
  }

  const valid = !isEmpty && error === "";

  const pResult = valid ? permutasi(n, r) : null;
  const cResult = valid ? kombinasi(n, r) : null;

  return (
    <div
      style={{
        border: "1px solid var(--border)",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "var(--surface)",
      }}
      aria-label="Kalkulator Permutasi dan Kombinasi"
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "var(--accent-light)",
          borderBottom: "1px solid var(--border)",
          padding: "1rem 1.5rem",
        }}
      >
        <p
          style={{
            fontWeight: 700,
            color: "var(--accent)",
            fontSize: "0.9375rem",
          }}
        >
          Kalkulator Permutasi &amp; Kombinasi
        </p>
        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--text-secondary)",
            marginTop: "0.25rem",
          }}
        >
          Masukkan nilai n (total objek) dan r (objek yang dipilih)
        </p>
      </div>

      {/* Inputs */}
      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1.5rem",
          }}
        >
          <div style={{ flex: "1 1 140px" }}>
            <label
              htmlFor="perm-n"
              style={{
                display: "block",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: "0.375rem",
              }}
            >
              n (total objek)
            </label>
            <input
              id="perm-n"
              type="number"
              min={0}
              max={20}
              step={1}
              value={nVal}
              onChange={(e) => setNVal(e.target.value)}
              placeholder="0–20"
              style={{
                width: "100%",
                padding: "0.5rem 0.75rem",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                fontSize: "1rem",
                color: "var(--text-primary)",
                backgroundColor: "var(--bg)",
                outline: "none",
              }}
            />
          </div>

          <div style={{ flex: "1 1 140px" }}>
            <label
              htmlFor="perm-r"
              style={{
                display: "block",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: "0.375rem",
              }}
            >
              r (objek yang dipilih)
            </label>
            <input
              id="perm-r"
              type="number"
              min={0}
              max={20}
              step={1}
              value={rVal}
              onChange={(e) => setRVal(e.target.value)}
              placeholder="0–n"
              style={{
                width: "100%",
                padding: "0.5rem 0.75rem",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                fontSize: "1rem",
                color: "var(--text-primary)",
                backgroundColor: "var(--bg)",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Error state */}
        {error && (
          <div
            role="alert"
            style={{
              backgroundColor: "#FEF2F2",
              borderLeft: "3px solid var(--red)",
              borderRadius: "0 6px 6px 0",
              padding: "0.75rem 1rem",
              marginBottom: "1.25rem",
              color: "var(--red)",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            {error}
          </div>
        )}

        {/* Empty state */}
        {isEmpty && !error && (
          <div
            style={{
              textAlign: "center",
              padding: "2rem 1rem",
              color: "var(--text-muted)",
              fontSize: "0.9375rem",
            }}
          >
            Masukkan nilai n dan r untuk menghitung permutasi dan kombinasi.
          </div>
        )}

        {/* Results */}
        {valid && pResult !== null && cResult !== null && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Permutasi result */}
            <div
              style={{
                backgroundColor: "var(--accent-light)",
                borderLeft: "3px solid var(--accent)",
                borderRadius: "0 8px 8px 0",
                padding: "1rem 1.25rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "0.375rem",
                }}
              >
                Permutasi (urutan diperhitungkan)
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  marginBottom: "0.25rem",
                  fontFamily: "monospace",
                }}
              >
                P({n},{r}) = {n}! / ({n}-{r})! = {n}! / {n - r}!
              </p>
              {r > 0 && (
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    marginBottom: "0.5rem",
                    fontFamily: "monospace",
                  }}
                >
                  = {permutasiSteps(n, r)}
                </p>
              )}
              <p
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  letterSpacing: "-0.02em",
                }}
              >
                {pResult.toString()}
              </p>
            </div>

            {/* Kombinasi result */}
            <div
              style={{
                backgroundColor: "#F0FDF4",
                borderLeft: "3px solid var(--green)",
                borderRadius: "0 8px 8px 0",
                padding: "1rem 1.25rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--green)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "0.375rem",
                }}
              >
                Kombinasi (urutan tidak diperhitungkan)
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  marginBottom: "0.25rem",
                  fontFamily: "monospace",
                }}
              >
                C({n},{r}) = {n}! / ({r}! × {n - r}!)
              </p>
              {r > 0 && (
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    marginBottom: "0.5rem",
                    fontFamily: "monospace",
                  }}
                >
                  = {permutasiSteps(n, r)} / ({r === 0 ? "1" : Array.from({ length: r }, (_, i) => r - i).join(" × ")})
                </p>
              )}
              <p
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                {cResult.toString()}
              </p>
            </div>

            {/* Comparison explanation */}
            <div
              style={{
                backgroundColor: "var(--amber-light)",
                borderLeft: "3px solid var(--amber)",
                borderRadius: "0 8px 8px 0",
                padding: "0.875rem 1.25rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--amber)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "0.375rem",
                }}
              >
                Perbandingan
              </p>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.7 }}>
                {r === 0 ? (
                  <>P({n},0) = C({n},0) = 1 : tidak ada objek yang dipilih.</>
                ) : r === 1 ? (
                  <>P({n},1) = C({n},1) = {n} : hanya 1 objek dipilih, urutan tidak berpengaruh.</>
                ) : (
                  <>
                    P({n},{r}) = {pResult.toString()} lebih besar dari C({n},{r}) = {cResult.toString()}.{" "}
                    Permutasi selalu &ge; Kombinasi karena permutasi menghitung setiap urutan berbeda sebagai susunan yang berbeda
                    (faktor pengali urutan = {r}! = {factorial(r).toString()}).
                  </>
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
