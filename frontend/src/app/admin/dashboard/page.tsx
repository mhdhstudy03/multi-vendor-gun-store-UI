"use client";

import { useState, useEffect } from "react";
import { Shield, Package, Users, TrendingUp, AlertCircle, CheckCircle, X, Edit, Trash2 } from "lucide-react";
import { PageHero } from "../../../components/page-hero";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { fetchProducts, fetchVendors, type Product, type Vendor } from "../../../lib/api";

export default function AdminDashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [selectedTab, setSelectedTab] = useState<"overview" | "products" | "vendors">("overview");

  const loadData = async () => {
    try {
      const [productsData, vendorsData] = await Promise.all([
        fetchProducts(),
        fetchVendors(),
      ]);
      setProducts(productsData);
      setVendors(vendorsData);
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void loadData();
  }, []);

  const totalRevenue = products.reduce((sum, p) => sum + p.price, 0);
  // In a real app, products would have a status field
  const pendingProducts = 0;
  const activeVendors = vendors.length;

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-0">
      <PageHero
        eyebrow="Admin control center"
        title="Manage marketplace operations and compliance."
        description="Monitor vendors, review product listings, and oversee marketplace health from a single dashboard."
        actions={
          <>
            <Button className="bg-lime-400 text-black hover:bg-lime-300">
              Generate report
            </Button>
            <Button variant="outline" className="border-white/30 text-white">
              Export data
            </Button>
          </>
        }
      />

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-white/10">
        <button
          onClick={() => setSelectedTab("overview")}
          className={`px-4 py-2 text-sm font-medium transition ${
            selectedTab === "overview"
              ? "border-b-2 border-lime-400 text-lime-400"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setSelectedTab("products")}
          className={`px-4 py-2 text-sm font-medium transition ${
            selectedTab === "products"
              ? "border-b-2 border-lime-400 text-lime-400"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Products ({products.length})
        </button>
        <button
          onClick={() => setSelectedTab("vendors")}
          className={`px-4 py-2 text-sm font-medium transition ${
            selectedTab === "vendors"
              ? "border-b-2 border-lime-400 text-lime-400"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Vendors ({vendors.length})
        </button>
      </div>

      {selectedTab === "overview" && (
        <>
          {/* Stats Grid */}
          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={Package}
              label="Total Products"
              value={products.length}
              helper="Active listings"
              trend="+12%"
            />
            <StatCard
              icon={Users}
              label="Active Vendors"
              value={activeVendors}
              helper="Verified accounts"
              trend="+3"
            />
            <StatCard
              icon={AlertCircle}
              label="Pending Review"
              value={pendingProducts}
              helper="Awaiting approval"
              trend={pendingProducts > 0 ? "Action needed" : "All clear"}
            />
            <StatCard
              icon={TrendingUp}
              label="Marketplace Value"
              value={`$${(totalRevenue / 1000).toFixed(0)}K`}
              helper="Total catalog value"
              trend="+8.2%"
            />
          </section>

          {/* Recent Activity */}
          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="border-white/10 bg-zinc-950">
              <CardHeader>
                <CardTitle className="text-xl">Recent Product Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {products.slice(0, 5).map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between rounded-lg border border-white/5 bg-black/40 px-4 py-3"
                    >
                      <div>
                        <p className="font-medium text-white">{product.name}</p>
                        <p className="text-xs text-zinc-400">{product.vendor}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-yellow-500/20 text-yellow-300">Pending</Badge>
                        <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-lime-400 text-black hover:bg-lime-300">
                  <Shield className="h-4 w-4 mr-2" />
                  Review Compliance
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/20 text-white">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Vendors
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/20 text-white">
                  <Package className="h-4 w-4 mr-2" />
                  Audit Products
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/20 text-white">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </section>
        </>
      )}

      {selectedTab === "products" && (
        <Card className="border-white/10 bg-zinc-950">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl">Product Management</CardTitle>
              <p className="text-sm text-zinc-400 mt-1">
                Review, approve, or reject product listings
              </p>
            </div>
            <Button className="bg-lime-400 text-black hover:bg-lime-300">
              Add Product
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 text-left text-xs uppercase tracking-[0.2em] text-zinc-400">
                    <th className="pb-3 pr-4">Product</th>
                    <th className="pb-3 pr-4">Vendor</th>
                    <th className="pb-3 pr-4">Category</th>
                    <th className="pb-3 pr-4">Price</th>
                    <th className="pb-3 pr-4">Status</th>
                    <th className="pb-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-white/5 hover:bg-white/5 transition"
                    >
                      <td className="py-4 pr-4">
                        <p className="font-medium text-white">{product.name}</p>
                      </td>
                      <td className="py-4 pr-4 text-zinc-300">{product.vendor}</td>
                      <td className="py-4 pr-4">
                        <Badge className="bg-white/10 text-xs text-white">
                          {product.category}
                        </Badge>
                      </td>
                      <td className="py-4 pr-4 text-lime-300">
                        ${product.price.toLocaleString()}
                      </td>
                      <td className="py-4 pr-4">
                        <Badge className="bg-yellow-500/20 text-yellow-300">Pending</Badge>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-green-400 hover:bg-green-500/20"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-white hover:bg-white/10"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-400 hover:bg-red-500/20"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedTab === "vendors" && (
        <Card className="border-white/10 bg-zinc-950">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl">Vendor Management</CardTitle>
              <p className="text-sm text-zinc-400 mt-1">
                Monitor vendor performance and compliance
              </p>
            </div>
            <Button className="bg-lime-400 text-black hover:bg-lime-300">
              Add Vendor
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {vendors.map((vendor) => (
                <div
                  key={vendor.id}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-black/40 px-5 py-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <p className="font-medium text-white text-lg">{vendor.name}</p>
                      <Badge className="bg-lime-300 text-black">
                        {vendor.rating.toFixed(1)} ★
                      </Badge>
                    </div>
                    <p className="text-sm text-zinc-400 mt-1">{vendor.fulfillment}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-green-500/20 text-green-300">Active</Badge>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-400 hover:bg-red-500/20">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  helper,
  trend,
}: {
  icon: typeof Shield;
  label: string;
  value: string | number;
  helper: string;
  trend?: string;
}) {
  return (
    <Card className="border-white/10 bg-white/5 p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">{label}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
          <p className="mt-1 text-xs text-zinc-400">{helper}</p>
        </div>
        <div className="rounded-full bg-white/10 p-3">
          <Icon className="h-6 w-6 text-lime-300" />
        </div>
      </div>
      {trend && (
        <p className="mt-3 text-xs text-lime-300 flex items-center gap-1">
          <TrendingUp className="h-3 w-3" />
          {trend}
        </p>
      )}
    </Card>
  );
}

